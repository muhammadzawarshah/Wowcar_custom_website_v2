import { dealerCustomerAppId, validCustomerAppScope } from './modules/customer-apps/dealer-app-identity';
import { appHostResolver } from './modules/customer-apps/app-hosts';
import { GROUP1_APP_ID, isGroup1Scope } from './modules/customer-apps/group1';
import { Errors } from './common/errors/app-error';
import { appDisabledMessage, customerAppStorage, customerAppMiddleware } from './modules/customer-apps/app-context';
import { DealerTradeIdentityService } from './infrastructure/dealertrade/dealertrade-identity.service';
import { mediaRoot } from './infrastructure/dealertrade/dealertrade-media.service';
import { dealerScopeMiddleware, dealerScopeStorage } from './infrastructure/database/dealer-scope';
import { DealerStatus, PrismaService } from './infrastructure/database';
import 'reflect-metadata';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import type { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { randomUUID } from 'node:crypto';
import { AppModule } from './app.module';
import { AppConfig } from './config/app-config.service';

const REQUEST_ID_PATTERN = /^[A-Za-z0-9._-]{8,100}$/;

/** Correlation id for logs, errors and audit rows. Trusts an upstream X-Request-Id if well-formed. */
function requestId(req: Request & { id?: string }, res: Response, next: NextFunction) {
  const incoming = req.header('x-request-id');
  req.id = incoming && REQUEST_ID_PATTERN.test(incoming) ? incoming : randomUUID();
  res.setHeader('X-Request-Id', req.id);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true });
  const config = app.get(AppConfig);
  const prefix = config.get('API_PREFIX');

  app.useLogger(app.get(Logger));
  app.set('trust proxy', config.get('TRUST_PROXY_HOPS'));
  app.disable('x-powered-by');
  app.use(requestId);
  // Keep the API, docs and media out of search engines.
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, noimageindex');
    if (req.method === 'GET' && req.path === '/robots.txt') return void res.type('text/plain').send('User-agent: *\nDisallow: /\n');
    next();
  });
  // Copies of DealerTrade dealer and group logos (DealerTradeMediaService); other sites and apps may load them.
  app.useStaticAssets(mediaRoot(), {
    prefix: '/media/', immutable: true, maxAge: '365d', index: false, dotfiles: 'ignore',
    setHeaders: (res) => res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin'),
  });
  app.use(helmet());
  app.use(compression());
  app.useBodyParser('json', { limit: '1mb' });
  const database = app.get(PrismaService);
  // Dealer apps: /api/v1/scope/{dealerIds}/... serves the same public API limited to those dealers.
  // A disabled app, or one whose dealer is no longer approved, answers with its support email instead of serving data.
  const supportEmail = async (app: { dealerIds: string[]; config: unknown }) => {
    const configured = (app.config as { supportEmail?: unknown } | null)?.supportEmail;
    if (typeof configured === 'string' && configured.trim()) return configured.trim();
    const dealers = await database.dealer.findMany({ where: { id: { in: app.dealerIds } }, select: { id: true, email: true } });
    return app.dealerIds.map(id => dealers.find(dealer => dealer.id === id)?.email?.trim()).find(Boolean) ?? null;
  };
  app.use(customerAppMiddleware(prefix, async id => {
    const registered = await database.customerApp.findFirst({ where: { OR: [{ id }, { appKey: id }] } });
    if (!registered) return null;
    const approved = registered.enabled ? await database.dealer.count({ where: { id: { in: registered.dealerIds }, status: DealerStatus.APPROVED } }) : 0;
    if (registered.enabled && approved === registered.dealerIds.length) return registered;
    return { ...registered, enabled: false, supportEmail: await supportEmail(registered) };
  }, appHostResolver(database)));
  app.use(dealerScopeMiddleware(prefix, async (ids) => (await dealerScopeStorage.exit(() => database.dealer.findMany({
    where: { id: { in: ids }, status: DealerStatus.APPROVED }, select: { id: true },
  }))).map((dealer) => dealer.id), async (ids, next, pathScoped) => {
    if (!isGroup1Scope(ids) && !(pathScoped && ids.length === 1)) return next();
    const id = isGroup1Scope(ids) ? GROUP1_APP_ID : dealerCustomerAppId(ids[0]);
    const app = await database.customerApp.findUnique({ where: { id } });
    // Dealer apps exist only when a super admin configured one; an unconfigured single dealer is a plain scope.
    if (!app && id !== GROUP1_APP_ID) return next();
    if (app && !app.enabled) throw Errors.forbidden('APP_DISABLED', appDisabledMessage(await supportEmail(app)));
    if (!app?.enabled || !validCustomerAppScope(app)) throw Errors.notFound('App');
    customerAppStorage.run(app, () => next());
  }));
  const identities = app.get(DealerTradeIdentityService);
  app.use((req: Request, res: Response, next: NextFunction) => identities.request(req, res, next));
  app.enableCors({
    origin: config.get('CORS_ORIGINS'),
    credentials: true,
    exposedHeaders: ['X-Request-Id'],
    maxAge: 600,
  });
  app.setGlobalPrefix(prefix, {
    exclude: [
      { path: 'health/live', method: RequestMethod.GET },
      { path: 'health/ready', method: RequestMethod.GET },
    ],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: false,
    }),
  );
  app.enableShutdownHooks();

  if (config.get('SWAGGER_ENABLED')) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('WowCar Custom Platform API')
        .setDescription(
          'WowCar automotive marketplace API: 500k+ vehicle search, multilingual catalogue (TH/EN/ZH/AR), listings, dealers, multi-dealer mobile apps, CRM, valuations, live dealer bidding, finance tools, content and OneSignal/FCM notifications.\n\n' +
            'Errors always use `{ statusCode, code, message, details?, requestId }`. Lists use `{ data, meta: { page, pageSize, total, pageCount } }`.',
        )
        .setVersion('2.0')
        .addBearerAuth()
        .build(),
    );
    SwaggerModule.setup('docs', app, document, { jsonDocumentUrl: 'docs/openapi.json' });
  }

  await app.listen(config.get('PORT'), '0.0.0.0');
  app.get(Logger).log(`API listening on :${config.get('PORT')}/${prefix} (docs at /docs)`);
}

void bootstrap();

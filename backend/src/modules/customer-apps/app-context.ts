import { isGroupAppId } from './group1';
import { appDealerId, validCustomerAppScope } from './dealer-app-identity';
import { AsyncLocalStorage } from 'node:async_hooks';
import type { NextFunction, Request, Response } from 'express';
import { dealerScopeStorage, currentDealerScope } from '../../infrastructure/database/dealer-scope';
import { Errors } from '../../common/errors/app-error';

export const MAIN_APP = 'changecars';
export type CustomerAppContext = { id: string; name: string; dealerIds: string[]; resetUrl: string | null; enabled: boolean; supportEmail?: string | null };

/** What a disabled app (or an app whose dealer is no longer approved) tells its users. */
export const appDisabledMessage = (supportEmail?: string | null) =>
  supportEmail ? `This App is disabled, please contact ${supportEmail}.` : 'This App is disabled, please contact support.';
export const customerAppStorage = new AsyncLocalStorage<CustomerAppContext>();
export const currentAppId = () => customerAppStorage.getStore()?.id ?? MAIN_APP;

/** Legacy inventory URLs cannot implicitly create accounts in the platform directory. */
export function authAppId() {
  if (currentDealerScope() && !customerAppStorage.getStore()) {
    throw Errors.badRequest('APP_CONTEXT_REQUIRED', 'Use the registered app API base URL for authentication');
  }
  const appId = currentAppId();
  if (appId !== MAIN_APP) {
    const app = customerAppStorage.getStore();
    if (!app?.enabled || !validCustomerAppScope(app)) throw Errors.forbidden('APP_NOT_FOUND', 'This customer app is unavailable');
  }
  return appId;
}

const BLOCKED = /^(admin|dealer|dealer-app|group-dashboard|health)(\/|$)|^web\/dashboard(\/|$)|^dealers\/register(\/|$)/;

/** Header a branded app can send instead of the /apps/<id> URL prefix. `changecars` (or no header) means the main app. */
export const APP_HEADER = 'x-app-id';
export const WOWCAR_APP_KEY_HEADER = 'x-wowcar-app-key';
const APP_ID = /^[a-z0-9][a-z0-9_-]{2,63}$/;
const headerValue = (req: Request) => {
  const value = req.headers?.[APP_HEADER] ?? req.headers?.[WOWCAR_APP_KEY_HEADER];
  return (Array.isArray(value) ? value[0] : value)?.trim().toLowerCase() || undefined;
};
const hostName = (req: Request) => String(req.headers?.host ?? '').trim().toLowerCase().replace(/:\d+$/, '');

/**
 * Runs a request inside a registered customer app (tenant). The app is chosen by, in order:
 * the /{prefix}/apps/{id}/... URL prefix (original), the X-App-Id header, or a host name listed in the app's domains.
 * Requests with none of these are untouched, so the main ChangeCars API behaves exactly as before.
 */
export function customerAppMiddleware(prefix: string, resolve: (id: string) => Promise<CustomerAppContext | null>, appForHost?: (host: string) => Promise<string | null>) {
  const clean = prefix.replace(/^\/+|\/+$/g, '');
  const base = `/${clean}/apps/`;
  const apiBase = `/${clean}/`;
  return async (req: Request, res: Response, next: NextFunction) => {
    const reject = (status: number, code: string, message: string) => res.status(status).json({ statusCode: status, code, message });
    const header = headerValue(req);
    const selected = header && header !== MAIN_APP ? header : undefined;
    let id: string, rest: string, search: string, rewrite: boolean;
    if (req.url.startsWith(base)) {
      const [path, query = ''] = req.url.slice(base.length).split(/\?(.*)/s);
      const slash = path.indexOf('/');
      id = slash < 0 ? path : path.slice(0, slash);
      rest = slash < 0 ? '' : path.slice(slash + 1);
      search = query; rewrite = true;
      if (selected && selected !== id) return reject(400, 'BAD_REQUEST', 'Provide one app selector: the /apps/ URL or the X-App-Id header');
    } else {
      if (!req.url.startsWith(apiBase)) return next();
      let chosen = selected;
      if (!chosen && appForHost) {
        const host = hostName(req);
        chosen = host ? (await appForHost(host).catch(() => null)) ?? undefined : undefined;
      }
      if (!chosen) return next();
      const [path, query = ''] = req.url.slice(apiBase.length).split(/\?(.*)/s);
      id = chosen; rest = path; search = query; rewrite = false;
      if (rest.startsWith('scope/') || /[?&]dealer_?[iI]d=/.test(`?${search}`)) return reject(400, 'BAD_REQUEST', 'Provide one app selector: the app or a dealer scope');
    }
    if (!APP_ID.test(id) || id === MAIN_APP || (!isGroupAppId(id) && !appDealerId(id)) || !rest || rest.startsWith('apps/') || rest.startsWith('scope/') || BLOCKED.test(rest)) {
      return reject(404, 'APP_NOT_FOUND', 'App endpoint not found');
    }
    try {
      const app = await resolve(id);
      if (app && app.id === id && !app.enabled) return reject(403, 'APP_DISABLED', appDisabledMessage(app.supportEmail));
      if (!app?.enabled || app.id !== id || !app.dealerIds.length) return reject(404, 'APP_NOT_FOUND', 'App is unavailable');
      if (!validCustomerAppScope(app)) return reject(404, 'APP_NOT_FOUND', 'Customer app configuration is invalid');
      if (rewrite) req.url = `/${clean}/${rest}${search ? `?${search}` : ''}`;
      customerAppStorage.run(app, () => dealerScopeStorage.run({ dealerIds: [...app.dealerIds].sort(), path: `${base}${id}` }, () => next()));
    } catch (error) { next(error); }
  };
}

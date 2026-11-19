'use strict';

const path = require('node:path');
const fs = require('node:fs');

// Hosting panels may start this file from a different working directory.
process.chdir(__dirname);
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const entry = path.join(__dirname, 'dist', 'main.js');
if (!fs.existsSync(entry)) {
  console.error('Build the backend before starting Passenger: npm ci --include=dev && npm run build');
  process.exit(1);
}

// Deployments build before switching releases; a restart must never reinstall or rebuild live code.
require('dotenv').config({ path: path.join(__dirname, '.env'), quiet: true });
require(entry);

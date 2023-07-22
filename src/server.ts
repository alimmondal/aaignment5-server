/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

process.on('uncaughtException', error => {
  errorLogger.error('uncaughtException is detected', error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    // await mongoose.connect(config.local_database_url as string);
    await mongoose.connect(config.database_url as string);
    logger.info('Database connected successfully');
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('database connection failed', error);
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

// console.log(x)

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});

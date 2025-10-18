import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'production';
  const useHttps = process.env.USE_HTTPS === 'true' || isProduction;

  let httpsOptions:
    | { key: Buffer; cert: Buffer; ca?: Buffer; passphrase?: string }
    | undefined = undefined;

  if (useHttps) {
    const certPath = process.env.SSL_CERT_PATH || '/etc/ssl/certs/server.crt';
    const keyPath = process.env.SSL_KEY_PATH || '/etc/ssl/private/server.key';
    const caPath = process.env.SSL_CA_PATH;
    const passphrase = process.env.SSL_KEY_PASSPHRASE;

    try {
      httpsOptions = {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
        passphrase: passphrase,
      };

      // Add certificate chain if provided
      if (caPath) {
        httpsOptions.ca = fs.readFileSync(caPath);
        console.log(
          'HTTPS enabled with SSL certificates and certificate chain',
        );
      } else {
        console.log('HTTPS enabled with SSL certificates');
      }
    } catch (error) {
      console.warn(
        'HTTPS requested but SSL certificates not found:',
        error.message,
      );
      console.warn(
        'Falling back to HTTP. Set SSL_CERT_PATH, SSL_KEY_PATH, and optionally SSL_CA_PATH environment variables.',
      );
    }
  }

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  app.enableCors();

  const port = process.env.PORT ?? 3000;
  const protocol = httpsOptions ? 'https' : 'http';

  await app.listen(port);
  console.log(`Application is running on: ${protocol}://localhost:${port}`);
}
bootstrap();

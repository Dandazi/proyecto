import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));  // ← Esta línea es CLAVE
  await app.listen(3000);
  console.log('🚀 Servidor en http://localhost:3000');
  console.log('📱 Login en http://localhost:3000/login.html');
}
bootstrap();
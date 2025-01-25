import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  const port = process.env.PORT || 4000;
  app.enableCors({
    origin: process.env.CORS_API,
  });
  await app.listen(port);
}
bootstrap();

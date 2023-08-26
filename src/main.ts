import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix for API
  app.setGlobalPrefix('api');

  // Global PIPES for input in API
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Enable cors
  app.enableCors();

  // Swagger + OpenAPI config
  const config = new DocumentBuilder()
    .setTitle('INSSOFT API')
    .setDescription('TEST DB')
    .setVersion('1.0')
    .build();

  // Use Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // await app.listen(3000);
  await app.listen(process.env.PORT || 300);
}
bootstrap();

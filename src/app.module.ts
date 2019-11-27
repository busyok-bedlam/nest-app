import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ChatModule } from './chat/chat.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    CatsModule,
    ChatModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}

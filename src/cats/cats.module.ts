import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { CatsMiddleware } from "./cats.middleware";

import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(CatsMiddleware).forRoutes('cats');
	}
		
}

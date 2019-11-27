import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger: Logger = new Logger('AppGateway');
  use(req: any, res: any, next: () => void) {
    this.logger.log('LOGGER MIDDLEWARE');
    next();
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';


@Injectable()
export class CatsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {

    console.log(req.body || req.params)
		
    next();
  }
}

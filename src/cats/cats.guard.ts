import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

const validation = query => {
	if(query.name) {
		return true;
	} else {
		return false;
	}
}
@Injectable()
export class CatsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
		console.log(request.query);
    return validation(request.query);
  }
}

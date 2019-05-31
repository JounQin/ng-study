import {
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap, finalize } from 'rxjs/operators'

import { LoggerService } from './logger.service'

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private logger: LoggerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const start = Date.now()
    let status = ''
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            status = 'success'
          }
        },
        () => {
          status = 'failed'
        },
      ),
      finalize(() => {
        const end = Date.now()
        this.logger.log(
          `${req.urlWithParams} (${
            req.method
          }) finished with status ${status} in ${end - start}ms`,
        )
      }),
    )
  }
}

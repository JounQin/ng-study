import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { PhoneService } from './phone.service'
import { LoggerService } from './logger.service'
import { LoggingInterceptor } from './logging.interceptor'
import { UserService } from './user.service'

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true,
  },
]

const SERVICES = [PhoneService, LoggerService, UserService]

@NgModule({
  providers: [...SERVICES, ...INTERCEPTORS],
})
export class ServicesModule {}

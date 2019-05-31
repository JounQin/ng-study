import { Injectable } from '@angular/core'

@Injectable()
export class LoggerService {
  log(...args: any[]) {
    console.log(...args)
  }
}

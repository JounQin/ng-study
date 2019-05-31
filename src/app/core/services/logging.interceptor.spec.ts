import { TestBed } from '@angular/core/testing'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { UserService, IUser } from './user.service'
import { LoggingInterceptor } from './logging.interceptor'
import { LoggerService } from './logger.service'
import { Type } from '@angular/core'

describe('LoggingInterceptor', () => {
  let loggerService: LoggerService
  let userService: UserService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoggerService,
        UserService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoggingInterceptor,
          multi: true,
        },
      ],
    })

    loggerService = TestBed.get(LoggerService)

    spyOn(loggerService, 'log')

    userService = TestBed.get(UserService)
    httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should log specific content on request', () => {
    const users: IUser[] = []

    userService.getUsers().subscribe(response => {
      expect(response).toBeTruthy()
    })

    const httpRequest = httpMock.expectOne(
      `https://jsonplaceholder.typicode.com/users`,
    )

    httpRequest.flush(users)

    expect(loggerService.log).toHaveBeenCalled()
  })
})

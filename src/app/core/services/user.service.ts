import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { refCount, publishLast } from 'rxjs/operators'
import { Observable } from 'rxjs'

export interface IUser {
  id: number
  name: string
  username: string
  email: string
}

@Injectable()
export class UserService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get(this.ROOT_URL).pipe(
      publishLast(),
      refCount(),
    )
  }
}

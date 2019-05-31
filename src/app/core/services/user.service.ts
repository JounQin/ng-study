import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { refCount, publishLast } from 'rxjs/operators'

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

  getUsers() {
    return this.httpClient.get<IUser[]>(this.ROOT_URL).pipe(
      publishLast(),
      refCount(),
    )
  }
}

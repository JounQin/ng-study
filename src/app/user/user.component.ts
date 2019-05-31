import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { UserService, IUser } from 'app/core/services/user.service'

@Component({
  template: `
    <ul>
      <li *ngFor="let user of users$ | async">
        {{ user.id }}: {{ user.name }} - {{ user.username }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let user of users2$ | async">
        {{ user.id }}: {{ user.name }} - {{ user.username }}
      </li>
    </ul>
  `,
})
export class UserComponent implements OnInit {
  users$: Observable<IUser[]>
  users2$: Observable<IUser[]>

  constructor(private user: UserService) {}

  ngOnInit() {
    this.users$ = this.user.getUsers()

    setTimeout(() => {
      this.users2$ = this.users$
    }, 2000)
  }
}

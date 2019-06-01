import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { UserService, IUser } from 'app/core/services/user.service'

@Component({
  template: `
    <ul>
      <li
        *appFor="
          let user of users;
          index as i;
          even as isEven;
          odd as isOdd;
          first as isFirst;
          last as isLast;
          trackBy: trackById
        "
      >
        {{ i }} - {{ user.id }}: {{ user.name }} - {{ user.username }}
        <br />
        isEven: {{ isEven }} isOdd: {{ isOdd }} isFirst: {{ isFirst }} isLast:
        {{ isLast }}
      </li>
    </ul>
  `,
})
export class ForComponent implements OnInit {
  users$: Observable<IUser[]>

  users: IUser[]

  constructor(private user: UserService) {}

  trackById(_index: number, user: IUser) {
    return user.id
  }

  async ngOnInit() {
    const users$ = this.user.getUsers()

    this.users = await users$.toPromise()

    this.moveUser()

    this.users$ = users$.pipe(map(users => users.filter((_v, i) => i < 5)))

    setTimeout(() => {
      this.users$ = users$.pipe(map(users => users.filter((_v, i) => i >= 5)))
    }, 2000)
  }

  moveUser() {
    if (!this.users.length) {
      return
    }
    setTimeout(() => {
      this.users.push(this.users.shift())
      this.moveUser()
    }, 1000)
  }
}

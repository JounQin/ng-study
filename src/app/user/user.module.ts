import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { UserComponent } from './user.component'
import { SharedModule } from 'app/shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UserComponent,
      },
    ]),
  ],
  declarations: [UserComponent],
})
export class UserModule {}

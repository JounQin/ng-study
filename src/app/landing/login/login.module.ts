import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from 'app/shared/shared.module'

import { LoginComponent } from './login.component'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}

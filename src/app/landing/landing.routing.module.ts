import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { LandingComponent } from './landing.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'login',
          },
          {
            path: 'login',
            loadChildren: () =>
              import('./login/login.module').then(m => m.LoginModule),
          },
        ],
      },
    ]),
  ],
})
export class LandingRoutingModule {}

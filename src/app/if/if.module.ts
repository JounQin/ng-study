import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { IfComponent } from './if.component'
import { IfDirective } from './if.directive'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: IfComponent,
      },
    ]),
  ],
  declarations: [IfComponent, IfDirective],
})
export class IfModule {}

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ForComponent } from './for.component'
import { ForDirective } from './for.directive'
import { SharedModule } from 'app/shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ForComponent,
      },
    ]),
  ],
  declarations: [ForComponent, ForDirective],
})
export class ForModule {}

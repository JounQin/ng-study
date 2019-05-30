import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import { ZoneComponent } from './zone.component'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ZoneComponent,
      },
    ]),
  ],
  declarations: [ZoneComponent],
})
export class ZoneModule {}

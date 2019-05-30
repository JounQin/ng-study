import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { ConnectionComponent } from './connection.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ConnectionComponent,
      },
    ]),
  ],
  declarations: [ConnectionComponent],
})
export class ConnectionModule {}

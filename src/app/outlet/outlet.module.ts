import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from 'app/shared/shared.module'
import { OutletComponent } from './outlet.component'
import { OutletAComponent } from './outlet-a.component'
import { OutletBComponent } from './outlet-b.component'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: OutletComponent,
      },
    ]),
  ],
  declarations: [OutletComponent, OutletAComponent, OutletBComponent],
  entryComponents: [OutletAComponent, OutletBComponent],
})
export class OutletModule {}

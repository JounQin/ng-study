import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static'

import { SharedModule } from 'app/shared/shared.module'
import 'legacy/app.entry'

import { DowngradeComponent } from './downgrade.component'
import './downgrades'

setAngularJSGlobal(angular)

@NgModule({
  imports: [
    UpgradeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '**',
        component: DowngradeComponent,
      },
    ]),
  ],
  declarations: [DowngradeComponent],
})
export class DowngradeModule {}

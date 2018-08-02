import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static'
import * as angular from 'angular'

import '../../../legacy/app.entry'
import { SharedModule } from '../../shared/shared.module'

import { DowngradeComponent } from './downgrade.component'

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

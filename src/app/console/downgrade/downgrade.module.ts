import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static'

import './downgrades'

// tslint:disable-next-line:ordered-imports
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DowngradeModule {}

import { NgModule } from '@angular/core'

import '../../legacy/app.entry'

// angular should be included first
// tslint:disable-next-line:ordered-imports
import { UpgradeModule } from '@angular/upgrade/static'

import { SharedModule } from '../shared/shared.module'

import { ConsoleComponent } from './console.component'
import { ConsoleRoutingModule } from './console.routing.module'

@NgModule({
  imports: [UpgradeModule, SharedModule, ConsoleRoutingModule],
  declarations: [ConsoleComponent],
})
export class ConsoleModule {}

import { NgModule } from '@angular/core'

import { SharedModule } from 'app/shared/shared.module'

import { ConsoleComponent } from './console.component'
import { ConsoleRoutingModule } from './console.routing.module'

@NgModule({
  imports: [SharedModule, ConsoleRoutingModule],
  declarations: [ConsoleComponent],
})
export class ConsoleModule {}

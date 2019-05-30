import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ConnectionComponent } from './connection.component'
import { ConnectionFastDirective } from './connection-fast.directive'
import { ConnectionSlowDirective } from './connection-slow.directive'
import { ConnectionService } from './connection.service'
import { ConnectionDirective } from './connection.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [
    ConnectionComponent,
    ConnectionDirective,
    ConnectionFastDirective,
    ConnectionSlowDirective,
  ],
  exports: [
    ConnectionComponent,
    ConnectionDirective,
    ConnectionFastDirective,
    ConnectionSlowDirective,
  ],
})
export class ConnectionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConnectionModule,
      providers: [ConnectionService],
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ConnectionModule,
    }
  }
}

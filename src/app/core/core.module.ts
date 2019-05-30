import { NgModule } from '@angular/core'

import { ServicesModule } from './services/services.module'
import { ConnectionModule } from './modules/connection.module'

@NgModule({
  imports: [ConnectionModule.forRoot(), ServicesModule],
})
export class CoreModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ConnectionModule } from '../core/modules/connection.module'

@NgModule({
  imports: [ConnectionModule.forChild()],
  exports: [CommonModule, RouterModule, ConnectionModule],
})
export class SharedModule {}

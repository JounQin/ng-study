import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { LandingComponent } from './landing.component'
import { LandingRoutingModule } from './landing.routing.module'

@NgModule({
  imports: [SharedModule, LandingRoutingModule],
  declarations: [LandingComponent],
})
export class LandingModule {}

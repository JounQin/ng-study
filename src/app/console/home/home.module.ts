import { NgModule } from '@angular/core'

import { SharedModule } from 'app/shared/shared.module'

import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing.module'

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}

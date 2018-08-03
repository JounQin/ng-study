import { NgModule } from '@angular/core'

import { PhoneService } from './phone.service'

const SERVICES = [PhoneService]

@NgModule({
  providers: SERVICES,
})
export class ServicesModule {}

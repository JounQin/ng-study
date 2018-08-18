import { Component, OnInit } from '@angular/core'

import { Phone, PhoneService } from 'app/core/services/phone.service'

@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  phones: Phone[]

  constructor(private phone: PhoneService) {}

  async ngOnInit() {
    this.phones = await this.phone.getPhones()
  }
}

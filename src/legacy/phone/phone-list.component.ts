import { PhoneService } from 'app/core/services/phone.service'

import template from './phone-list.component.html'

angular.module('app').component('phoneList', {
  template,
  controller: [
    'phone',
    function(phone: PhoneService) {
      this.$onInit = async () => {
        this.phones = await phone.getPhones()
      }
    },
  ],
})

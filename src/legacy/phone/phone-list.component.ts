import { PhoneService } from '../../app/core/services/phone.service'

import template from './phone-list.component.html'

angular.module('app').component('phoneList', {
  template,
  controller: [
    '$location',
    'phone',
    function($location: angular.ILocationService, phone: PhoneService) {
      this.$onInit = async () => {
        this.phones = await phone.getPhones()
      }
      this.toFoo = () => $location.url('/foo')
    },
  ],
})

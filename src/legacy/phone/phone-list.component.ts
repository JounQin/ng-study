import * as angular from 'angular'

import * as template from './phone-list.component.html'

angular.module('app').component('phoneList', {
  template,
  controller() {
    this.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
      },
      {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
      },
      {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
      },
    ]
  },
})

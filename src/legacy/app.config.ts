import { StateProvider } from '@uirouter/angularjs'

import './phone/phone-list.component'

angular.module('app').config([
  '$locationProvider',
  '$stateProvider',
  (
    $locationProvider: angular.ILocationProvider,
    $stateProvider: StateProvider,
  ) => {
    $stateProvider.state({
      name: 'phones',
      url: '/console/phones',
      template: '<phone-list></phone-list>',
    })

    $locationProvider.html5Mode(true)
  },
])

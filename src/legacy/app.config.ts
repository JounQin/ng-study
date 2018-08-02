import * as angular from 'angular'

import './phone/phone-list.component'

angular.module('app').config([
  '$locationProvider',
  '$routeProvider',
  (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider,
  ) => {
    $routeProvider.when('/console/phones', {
      template: '<phone-list></phone-list>',
    })

    $locationProvider.html5Mode(true)
  },
])

import { Router } from '@angular/router'
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs'

import './foo/foo.component'
import './phone/phone-list.component'

angular.module('app').config([
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  'ngRouterProvider',
  (
    $locationProvider: angular.ILocationProvider,
    $stateProvider: StateProvider,
    $urlRouterProvider: UrlRouterProvider,
    ngRouterProvider: {
      $get: () => Router
    },
  ) => {
    $stateProvider.state({
      name: 'phones',
      url: '/console/phones',
      template: '<phone-list></phone-list>',
    })
    $stateProvider.state({
      name: 'foo',
      url: '/console/foo',
      template: '<foo></foo>',
    })

    $urlRouterProvider.otherwise(() => {
      ngRouterProvider.$get().navigateByUrl(null, {
        replaceUrl: true,
      })
    })

    $locationProvider.html5Mode(true)
  },
])

import { Router } from '@angular/router'
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs'

import './phone/phone-list.component'

angular.module('app').config([
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  (
    $locationProvider: angular.ILocationProvider,
    $stateProvider: StateProvider,
    $urlRouterProvider: UrlRouterProvider,
  ) => {
    $stateProvider.state({
      name: 'phones',
      url: '/console/phones',
      template: '<phone-list></phone-list>',
    })

    let ngRoutes: string[]

    $urlRouterProvider.otherwise(($injector, $location) => {
      const ngRouter = $injector.get<Router>('ngRouter')
      if (!ngRoutes) {
        ngRoutes = ngRouter.config.map(({ path }) => path)
      }
      const canBeHandled = ngRoutes.includes($location.path().split('/')[1])
      ngRouter.navigateByUrl(canBeHandled && $location.url(), {
        replaceUrl: !canBeHandled,
      })
    })

    $locationProvider.html5Mode(true)
  },
])

import { Router } from '@angular/router'
import { StateProvider, UrlService } from '@uirouter/angularjs'

import './phone/phone-list.component'

angular.module('app').config([
  '$locationProvider',
  '$stateProvider',
  '$urlServiceProvider',
  'ngRouterProvider',
  (
    $locationProvider: angular.ILocationProvider,
    $stateProvider: StateProvider,
    $urlServiceProvider: UrlService,
    ngRouterProvider: {
      $get: () => Router
    },
  ) => {
    $stateProvider.state({
      name: 'phones',
      url: '/console/phones',
      template: '<phone-list></phone-list>',
    })

    const ngRouter = ngRouterProvider.$get()
    const ngRoutes = ngRouter.config.map(({ path }) => path)

    $urlServiceProvider.rules.otherwise(() => {
      const canBeHandled = ngRoutes.includes(
        $urlServiceProvider.path().split('/')[1],
      )
      setTimeout(() => {
        ngRouter.navigateByUrl(canBeHandled && $urlServiceProvider.url(), {
          replaceUrl: !canBeHandled,
        })
      }, 100)
    })

    $locationProvider.html5Mode(true)
  },
])

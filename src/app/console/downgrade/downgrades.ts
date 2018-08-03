import { LocationStrategy } from '@angular/common'
import { Router } from '@angular/router'
import { downgradeInjectable } from '@angular/upgrade/static'
import angular, { IScope } from 'angular'

import { Directory } from '../../../types'
import { PhoneService } from '../../core/services/phone.service'

export const DOWNGRADE_MODULE = '__DOWNGRADE_MODULE__'

const downgrade = angular.module(DOWNGRADE_MODULE, [])

const downgradableServices = {
  ngLocationStrategy: LocationStrategy,
  ngRouter: Router,
  phone: PhoneService,
}

Object.entries(downgradableServices).forEach(([name, Service]) =>
  downgrade.factory(name, downgradeInjectable(Service)),
)

downgrade.directive<
  IScope & {
    routerLink: string
    queryParams: Directory
    replaceUrl: boolean
  }
>('routerLink', [
  'ngLocationStrategy',
  'ngRouter',
  (ngLocationStrategy: LocationStrategy, ngRouter: Router) => ({
    restrict: 'A',
    scope: {
      routerLink: '@',
    },
    link: ({ routerLink, queryParams, replaceUrl }, element) => {
      const isLink = element.prop('tagName') === 'A'
      if (isLink) {
        element.attr(
          'href',
          ngLocationStrategy.prepareExternalUrl(
            ngRouter.serializeUrl(ngRouter.createUrlTree([routerLink])),
          ),
        )
      }
      element.one('click', e => {
        if (isLink) {
          e.preventDefault()
        }
        ngRouter.navigate([routerLink], {
          queryParams,
          replaceUrl,
        })
      })
    },
  }),
])

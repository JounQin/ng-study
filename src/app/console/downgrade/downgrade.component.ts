import { LocationStrategy } from '@angular/common'
import { Component, ElementRef, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UpgradeModule } from '@angular/upgrade/static'

export const setUpLocationSync = (ngUpgrade: UpgradeModule) => {
  if (!ngUpgrade.$injector) {
    throw new Error(`
        RouterUpgradeInitializer can be used only after UpgradeModule.bootstrap has been called.
        Remove RouterUpgradeInitializer and call setUpLocationSync after UpgradeModule.bootstrap.
      `)
  }

  const ngInjector = ngUpgrade.injector
  const router = ngUpgrade.injector.get(Router)
  const locationStrategy: LocationStrategy = ngInjector.get(LocationStrategy)
  const baseHref = locationStrategy.getBaseHref().replace(/\/+$/, '') // remove last slash char to ensure navigated url bellow starting with slash
  const url = document.createElement('a')

  ngUpgrade.$injector
    .get('$rootScope')
    .$on('$locationChangeStart', (_: any, next: string, __: string) => {
      url.href = next
      let { pathname } = url
      if (baseHref && !pathname.indexOf(baseHref)) {
        pathname = pathname.slice(baseHref.length)
      }
      router.navigateByUrl(pathname + url.search + url.hash)
    })
}

let synced: boolean

@Component({
  template: '<div ui-view></div>',
})
export class DowngradeComponent implements OnInit {
  constructor(private upgrade: UpgradeModule, private elRef: ElementRef) {}

  ngOnInit() {
    this.upgrade.bootstrap(this.elRef.nativeElement, ['app'], {
      strictDi: true,
    })
    if (!synced) {
      setUpLocationSync(this.upgrade)
      synced = true
    }
  }
}

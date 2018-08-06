import { Location } from '@angular/common'
import { Component, ElementRef, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UpgradeModule } from '@angular/upgrade/static'

let anchor: HTMLAnchorElement | undefined

function resolveUrl(
  url: string,
): {
  pathname: string
  search: string
  hash: string
} {
  if (!anchor) {
    anchor = document.createElement('a')
  }

  anchor.setAttribute('href', url)
  anchor.setAttribute('href', anchor.href)

  return {
    // IE does not start `pathname` with `/` like other browsers.
    pathname: `/${anchor.pathname.replace(/^\//, '')}`,
    search: anchor.search,
    hash: anchor.hash,
  }
}

export function setUpLocationSync(ngUpgrade: UpgradeModule) {
  if (!ngUpgrade.$injector) {
    throw new Error(`
        RouterUpgradeInitializer can be used only after UpgradeModule.bootstrap has been called.
        Remove RouterUpgradeInitializer and call setUpLocationSync after UpgradeModule.bootstrap.
      `)
  }

  const router: Router = ngUpgrade.injector.get(Router)
  const location: Location = ngUpgrade.injector.get(Location)

  ngUpgrade.$injector
    .get('$rootScope')
    .$on('$locationChangeStart', (_: any, next: string, __: string) => {
      const url = resolveUrl(next)
      const path = location.normalize(url.pathname)
      router.navigateByUrl(path + url.search + url.hash)
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

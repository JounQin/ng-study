import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core'
import { setUpLocationSync } from '@angular/router/upgrade'
import { UpgradeModule } from '@angular/upgrade/static'

@Component({
  template: '<div ui-view></div>',
})
export class DowngradeComponent implements OnInit, OnDestroy {
  constructor(private upgrade: UpgradeModule, private elRef: ElementRef) {}

  private destroyAngularJsApp() {
    if (!this.upgrade.$injector) {
      return
    }
    this.upgrade.$injector.get('$rootScope').$destroy()
  }

  ngOnInit() {
    this.destroyAngularJsApp()
    this.upgrade.bootstrap(this.elRef.nativeElement, ['app'], {
      strictDi: true,
    })
    setUpLocationSync(this.upgrade)
  }

  ngOnDestroy() {
    this.destroyAngularJsApp()
  }
}

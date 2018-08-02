import { Component, ElementRef, OnInit } from '@angular/core'
import { setUpLocationSync } from '@angular/router/upgrade'
import { UpgradeModule } from '@angular/upgrade/static'

let synced: boolean

@Component({
  template: '<div ng-view></div>',
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

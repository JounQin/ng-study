import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { setUpLocationSync } from '@angular/router/upgrade'
import { UpgradeModule } from '@angular/upgrade/static'

@Component({
  templateUrl: 'console.component.html',
})
export class ConsoleComponent implements OnInit {
  @ViewChild('content')
  content: ElementRef

  constructor(private upgrade: UpgradeModule) {}

  ngOnInit() {
    this.upgrade.bootstrap(this.content.nativeElement, ['app'], {
      strictDi: true,
    })
    setUpLocationSync(this.upgrade)
  }
}

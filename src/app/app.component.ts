import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><div ng-view></div>',
})
export class AppComponent {}

import { Component } from '@angular/core'
import { OutletAComponent } from './outlet-a.component'
import { OutletBComponent } from './outlet-b.component'

@Component({
  template: `
    <ng-container *ngComponentOutlet="components[index]"></ng-container>
    <button (click)="toggleIndex()">Toggle</button>
  `,
})
export class OutletComponent {
  components = [OutletAComponent, OutletBComponent]

  index = 0

  toggleIndex() {
    this.index = +!this.index
  }
}

import { Component } from '@angular/core'

@Component({
  template: `
    <app-connection>
      <ng-template let-isFast="isFast">
        <ng-container *ngIf="isFast">
          It's super fast network!
        </ng-container>
        <ng-container *ngIf="!isFast">
          Oh, it's pretty slow!
        </ng-container>
      </ng-template>
      <ng-container *appConnectionFast>
        Fast Fast!
      </ng-container>
      <ng-container *appConnectionSlow>
        Slow Slow!
      </ng-container>
    </app-connection>
    <br />
    <img
      appConnection
      slowSrc="https://via.placeholder.com/350x150?text=slow"
      fastSrc="https://via.placeholder.com/350x150?text=fast"
    />
  `,
})
export class ConnectionComponent {}

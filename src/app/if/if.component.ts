import { Component } from '@angular/core'

@Component({
  template: `
    <div *appIf="show as m; else elseBlock">
      Show Content
      {{ m ? 'a' : 'b' }}
    </div>
    <ng-template #elseBlock>
      <div>Else Content</div>
    </ng-template>
    <button (click)="show = !show">Toggle</button>
  `,
})
export class IfComponent {
  show: false
}

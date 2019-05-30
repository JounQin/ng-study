import {
  Component,
  ContentChild,
  TemplateRef,
  ChangeDetectionStrategy,
} from '@angular/core'

import { ConnectionService } from './connection.service'
import { ConnectionFastDirective } from './connection-fast.directive'
import { ConnectionSlowDirective } from './connection-slow.directive'

@Component({
  selector: 'app-connection',
  template: `
    <ng-container
      *ngTemplateOutlet="templateRef; context: { isFast: isFast$ | async }"
    ></ng-container>
    <br />
    <ng-container
      *ngTemplateOutlet="
        (isFast$ | async) ? connectionFast?.tpl : connectionSlow?.tpl
      "
    ></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectionComponent {
  @ContentChild(TemplateRef, { static: false })
  templateRef: TemplateRef<any>

  @ContentChild(ConnectionFastDirective, { static: false })
  connectionFast: ConnectionFastDirective

  @ContentChild(ConnectionSlowDirective, { static: false })
  connectionSlow: ConnectionSlowDirective

  isFast$ = this.connection.isFast$

  constructor(private connection: ConnectionService) {}
}

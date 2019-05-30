import { Directive, TemplateRef } from '@angular/core'

@Directive({
  selector: '[appConnectionFast]',
})
export class ConnectionFastDirective {
  constructor(public tpl: TemplateRef<any>) {}
}

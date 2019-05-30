import { Directive, TemplateRef } from '@angular/core'

@Directive({
  selector: '[appConnectionSlow]',
})
export class ConnectionSlowDirective {
  constructor(public tpl: TemplateRef<any>) {}
}

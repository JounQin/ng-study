import {
  Directive,
  ViewContainerRef,
  Input,
  TemplateRef,
  EmbeddedViewRef,
} from '@angular/core'

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  private context: { $implicit: any; appIf: any }

  private thenEmbeddedViewRef: EmbeddedViewRef<any>
  private elseEmbeddedViewRef: EmbeddedViewRef<any>

  elseTemplateRef: TemplateRef<any>

  @Input()
  set appIfElse(templateRef: TemplateRef<any>) {
    this.elseTemplateRef = templateRef
  }

  @Input()
  set appIf(value: boolean) {
    this.context = { $implicit: value, appIf: value }
    if (value) {
      this.thenEmbeddedViewRef = this.viewContainerRef.createEmbeddedView(
        this.thenTemplateRef,
        this.context,
      )
      if (this.elseEmbeddedViewRef) {
        this.elseEmbeddedViewRef.destroy()
      }
    } else {
      this.elseEmbeddedViewRef = this.viewContainerRef.createEmbeddedView(
        this.elseTemplateRef,
        this.context,
      )
      if (this.thenEmbeddedViewRef) {
        this.thenEmbeddedViewRef.destroy()
      }
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private thenTemplateRef: TemplateRef<any>,
  ) {}
}

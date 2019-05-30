import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
  OnDestroy,
} from '@angular/core'

import { ConnectionService } from './connection.service'
import { Subscription } from 'rxjs'

@Directive({
  selector: 'img[appConnection]',
})
export class ConnectionDirective implements OnInit, OnDestroy {
  @Input() slowSrc: string
  @Input() fastSrc: string

  sub: Subscription

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private connection: ConnectionService,
  ) {}

  ngOnInit() {
    this.sub = this.connection.isFast$.subscribe(isFast => {
      this.renderer.setAttribute(
        this.elementRef.nativeElement,
        'src',
        isFast ? this.fastSrc : this.slowSrc,
      )
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}

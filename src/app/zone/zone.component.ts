import { Component, OnInit, NgZone } from '@angular/core'

@Component({
  template: `
    counting: {{ counting }}
    <br />
    processed: {{ processed }}
  `,
})
export class ZoneComponent implements OnInit {
  counting = 0
  processed = false

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // this.processCounting(() => {
    //   this.processed = true
    // })
    this.ngZone.runOutsideAngular(() => {
      this.processCounting(() => {
        this.ngZone.run(() => {
          this.processed = true
        })
      })
    })
  }

  processCounting(callback?: () => void) {
    this.counting++

    if (this.counting < 100) {
      setTimeout(() => {
        this.processCounting(callback)
      }, 10)
    } else {
      callback()
    }
  }
}

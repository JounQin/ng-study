import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, startWith, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Counter2Service {
  private value$$ = new BehaviorSubject(0);

  interval$$ = new BehaviorSubject(1000);

  value$ = this.interval$$.pipe(
    switchMap((num) => interval(num)),
    switchMap(() => {
      this.value$$.next(this.value$$.getValue() + 1);
      return this.value$$;
    }),
    startWith(this.value$$.getValue())
  );
}

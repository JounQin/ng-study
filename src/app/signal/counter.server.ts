import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  value = signal(0);

  interval = signal(1000);

  counterEffectRef = effect((onCleanup) => {
    const intervalId = setInterval(() => {
      this.value.update((v) => v + 1);
    }, this.interval());
    onCleanup(() => {
      clearInterval(intervalId);
    });
  });
}

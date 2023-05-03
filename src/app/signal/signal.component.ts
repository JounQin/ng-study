import { ButtonModule, InputModule } from '@alauda/ui';
import { AsyncPipe, Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterService } from './counter.server';
import { Counter2Service } from './counter2.service';

@Component({
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [ButtonModule, InputModule, FormsModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalComponent {
  num = signal(0);

  double = computed(() => 2 * this.num());

  location = inject(Location);

  counter = signal(0);

  interval = signal(1000);

  counterEffectRef = effect((onCleanup) => {
    const internalId = setInterval(
      () => this.counter.update((v) => v + 1),
      this.interval()
    );
    onCleanup(() => {
      clearInterval(internalId);
    });
  });

  counterSv = inject(CounterService);

  counterSv2 = inject(Counter2Service);

  constructor() {
    const ref = effect((onCleanup) => {
      console.log('num changed: ', this.num());
      onCleanup(() => {
        console.log('cleanup');
      });
    });

    setTimeout(() => ref.destroy(), 1000);
  }
}

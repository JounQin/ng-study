import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  templateUrl: './home.component.html',
  imports: [SharedModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  text = 'Reverse';

  onReverse() {
    this.text = this.text.split('').reverse().join('');
  }
}

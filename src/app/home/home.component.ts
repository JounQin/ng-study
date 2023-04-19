import { ButtonModule } from '@alauda/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  imports: [RouterLink, ButtonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  text = 'Reverse';

  onReverse() {
    this.text = this.text.split('').reverse().join('');
  }
}

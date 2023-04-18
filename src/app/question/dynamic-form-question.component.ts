import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  imports: [SharedModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormQuestionComponent {
  @Input()
  question!: QuestionBase<string>;

  form = inject(FormGroupDirective).control;
}

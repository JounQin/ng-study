import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { QuestionBase } from './question-base';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FormModule, InputModule, SelectModule } from '@alauda/ui';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  imports: [
    NgFor,
    NgSwitch,
    NgSwitchCase,
    ReactiveFormsModule,
    FormModule,
    InputModule,
    SelectModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormQuestionComponent {
  @Input()
  question!: QuestionBase<string>;

  form = inject(FormGroupDirective).control;
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { QuestionControlService } from './question-control.service';
import { QuestionBase } from './question-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { NgFor, NgIf } from '@angular/common';
import { ButtonModule } from '@alauda/ui';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    NgIf,
    ButtonModule,
    DynamicFormQuestionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input()
  questions: QuestionBase<string>[] | null = [];

  form!: FormGroup;

  payload = '';

  private qcs = inject(QuestionControlService);

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions!);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { QuestionService } from './question.service';
import { AsyncPipe } from '@angular/common';

@Component({
  templateUrl: './question.component.html',
  standalone: true,
  imports: [AsyncPipe, DynamicFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionService],
})
export default class QuestionComponent {
  question = inject(QuestionService);

  questions$ = this.question.getQuestions();
}

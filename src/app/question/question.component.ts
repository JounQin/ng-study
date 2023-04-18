import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { QuestionService } from './question.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  templateUrl: './question.component.html',
  standalone: true,
  imports: [SharedModule, DynamicFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionService],
})
export class QuestionComponent {
  question = inject(QuestionService);

  questions$ = this.question.getQuestions();
}

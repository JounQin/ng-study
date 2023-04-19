import { FormModule } from '@alauda/ui';
import { JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  template: `
    <aui-form-item [width]="props.width">
      <label auiFormItemLabel [for]="id">{{ props.label }}</label>
      <ng-container #fieldComponent></ng-container>
      <div *ngIf="props.description" auiFormItemHint>
        {{ props.description }}
      </div>
      <div
        *ngIf="
          formControl.errors &&
          (formControl.dirty || $any(controlContainer)?.submitted)
        "
        auiFormItemHint
        class="error"
      >
        {{ formControl.errors | json }}
      </div>
    </aui-form-item>
  `,
  styles: [
    `
      aui-form-item ::ng-deep .aui-form-item__content > ng-component {
        display: flex;
        flex: 1;
      }

      .error {
        color: red;
      }
    `,
  ],
  standalone: true,
  imports: [NgIf, JsonPipe, FormModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent extends FieldWrapper {
  controlContainer = inject(ControlContainer, {
    optional: true,
  });
}

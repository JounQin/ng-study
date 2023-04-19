import { FormModule, SelectModule } from '@alauda/ui';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyModule } from '@ngx-formly/core';

@Component({
  template: `
    <aui-multi-select
      *ngIf="props.multiple; else single"
      auiFormItemControl
      [formControl]="$any(formControl)"
      [required]="props.required!"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder!"
      [clearable]="props.clearable"
    >
      <aui-option
        *ngFor="let option of $any(props.options)"
        [label]="option.label"
        [value]="option.value"
      >
        {{ option.label }}
      </aui-option>
    </aui-multi-select>
    <ng-template #single>
      <aui-select
        auiFormItemControl
        [formControl]="$any(formControl)"
        [required]="props.required!"
        [formlyAttributes]="field"
        [placeholder]="props.placeholder!"
        [clearable]="props.clearable"
      >
        <aui-option
          *ngFor="let option of $any(props.options)"
          [label]="option.label"
          [value]="option.value"
        >
          {{ option.label }}
        </aui-option>
      </aui-select>
    </ng-template>
  `,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    FormModule,
    SelectModule,
    FormlyModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends FieldType {}

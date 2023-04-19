import { FormModule, SelectModule } from '@alauda/ui';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import { SafeAsyncPipe } from '../safe-async.pipe';

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
        *ngFor="let option of $any(props.options) | safeAsync"
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
          *ngFor="let option of $any(props.options) | safeAsync"
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
    SafeAsyncPipe,
    ReactiveFormsModule,
    FormModule,
    SelectModule,
    FormlyModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends FieldType {}

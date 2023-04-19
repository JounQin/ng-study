import { FormModule, InputModule } from '@alauda/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyModule } from '@ngx-formly/core';

@Component({
  template: `<input
    [type]="type"
    aui-input
    auiFormItemControl
    [formControl]="$any(formControl)"
    [required]="props.required!"
    [formlyAttributes]="field"
  />`,
  standalone: true,
  imports: [ReactiveFormsModule, FormModule, InputModule, FormlyModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends FieldType {
  get type() {
    return this.props.type || 'text';
  }
}

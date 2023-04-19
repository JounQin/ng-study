import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule, FormModule } from '@alauda/ui';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    ButtonModule,
    FormModule,
    FormlyModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormComponent {
  form = new FormGroup({});

  model: any = {};

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        width: 'medium',
      },
    },
    {
      key: 'Select',
      type: 'select',
      props: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        width: 'medium',
        clearable: true,
        multiple: true,
        options: [
          {
            label: 'A',
            value: 'a',
          },
          {
            label: 'B',
            value: 'b',
          },
          {
            label: 'C',
            value: 'c',
          },
        ],
      },
    },
  ];
}

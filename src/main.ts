import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { routes } from './app/routes';
import { FormlyModule } from '@ngx-formly/core';
import { InputComponent } from './app/form/input/input.component';
import { FormFieldComponent } from './app/form/form-field/form-field.component';
import { Validators } from '@angular/forms';
import { SelectComponent } from './app/form/select/select.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      FormlyModule.forRoot({
        wrappers: [
          {
            name: 'form-field',
            component: FormFieldComponent,
          },
        ],
        types: [
          {
            name: 'input',
            component: InputComponent,
            wrappers: ['form-field'],
          },
          {
            name: 'email',
            extends: 'input',
            defaultOptions: {
              props: {
                type: 'email',
              },
              validators: {
                validation: ['email'],
              },
            },
          },
          {
            name: 'select',
            component: SelectComponent,
            wrappers: ['form-field'],
          },
        ],
        validators: [
          {
            name: 'email',
            validation: Validators.email,
          },
        ],
      })
    ),
  ],
}).catch(console.error);

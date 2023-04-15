import { ButtonModule, FormModule, InputModule, RadioModule, SelectModule, SwitchModule, TableModule } from '@alauda/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const EXPORTABLE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ButtonModule,
  FormModule,
  InputModule,
  RadioModule,
  SelectModule,
  SwitchModule,
  TableModule,
];

@NgModule({
  imports: EXPORTABLE,
  exports: EXPORTABLE,
})
export class SharedModule {}

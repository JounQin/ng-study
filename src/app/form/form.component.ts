import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Location } from '@angular/common';
import { User, UserFormComponent } from './user-form/user-form.component';
import { FormBuilder } from '@angular/forms';
import { startWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './form.component.html',
  standalone: true,
  imports: [SharedModule, UserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    user: {
      age: 10,
    } as User,
  });

  constructor(
    private location: Location,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigateByUrl('/');
      return;
    }

    console.log('invalid form');
  }

  onCancel() {
    this.location.back();
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnDestroy,
  OnInit,
  Optional,
  forwardRef,
} from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  Validators,
} from '@angular/forms';
import { Subject, combineLatest, takeUntil } from 'rxjs';

export interface User {
  name: string;
  email: string;
  age: number;
  gender: boolean;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserFormComponent),
      multi: true,
    },
  ],
})
export class UserFormComponent
  implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy
{
  destroy$$ = new Subject<void>();

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [18, Validators.min(0)],
    gender: false,
  });

  private _validate(_ctrl: AbstractControl) {
    return this.form.valid ? null : { [this.constructor.name]: true };
  }

  private declare _ngControl: NgControl;

  get formGroup() {
    return this.parentFormGroup || this.parentNgForm;
  }

  declare onChange: (user: User) => void;
  declare onTouch: (user: User) => void;

  constructor(
    private injector: Injector,
    private fb: FormBuilder,
    @Optional()
    private parentFormGroup: FormGroupDirective,
    @Optional()
    private parentNgForm: NgForm
  ) {
    this._validate = this._validate.bind(this);
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$$))
      .subscribe((value) => {
        this.onChange?.(value as User);
      });

    this._ngControl = this.injector.get(NgControl, null, {
      self: true,
    })!;

    this._ngControl.valueAccessor = this;
  }

  ngAfterViewInit(): void {
    this._ngControl.control!.addValidators(this._validate);
    this._ngControl.control!.updateValueAndValidity();
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
    this._ngControl.control!.removeValidators(this._validate);
  }

  writeValue(user: Partial<User>): void {
    this.form.patchValue(user);
  }

  registerOnChange(fn: (user: User) => void): void {
    this.onChange = fn;
    this.onChange(this.form.value as User);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  registerOnValidatorChange() {}

  setDisabledState?(isDisabled: boolean): void {
    this.form[isDisabled ? 'disable' : 'enable']();
  }
}

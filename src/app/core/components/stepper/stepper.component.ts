import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { Directionality, Direction } from '@angular/cdk/bidi';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatSlideToggleModule,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class StepperComponent implements OnInit, OnDestroy{
  form: FormGroup = this._formBuilder.group({
    personalDetails: this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    }),
    address: this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    }),
    contacts: this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    }),
  });

  public direction: Direction | any = 'rtl';
  public isRtl: boolean = true;

  stepperOrientation!: Observable<StepperOrientation>;

  private subscriptions: Subscription[] = [];

  get personalDetailsFG(): FormGroup {
    return this.form.get('personalDetails') as FormGroup;
  }

  get addressFG(): FormGroup {
    return this.form.get('address') as FormGroup;
  }

  get contactsFG(): FormGroup {
    return this.form.get('contacts') as FormGroup;
  }

  constructor(private _formBuilder: FormBuilder, private dir: Directionality, breakpointObserver: BreakpointObserver, private storage: StorageMap) {
    this.isRtl = dir.value === 'rtl';

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }


  ngOnInit(): void {
    this.storage.get('direction').subscribe((direction) => {
      this.direction = direction || 'rtl';
      this.isRtl = this.direction === 'rtl';
    });

    this.loadFormData();
    this.subscriptions.push(
      this.form.valueChanges.subscribe((value) => {
        this.storage.set('form', value).subscribe(() => { });
      })
    );
  }

  public toggleDirection(event: MatSlideToggleChange): void {
    this.direction = event.checked ? 'rtl' : 'ltr';
    this.storage.set('direction', this.direction).subscribe(() => { });
  }

  private loadFormData(): void {
    this.storage.get('form').subscribe((value) => {
      if (value) {
        this.form.patchValue(value as any);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

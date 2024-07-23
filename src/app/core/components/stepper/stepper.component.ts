import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { Directionality, Direction } from '@angular/cdk/bidi';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

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
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });


  public direction: Direction = 'rtl';
  public isRtl: boolean = true;

  stepperOrientation!: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, private dir: Directionality, breakpointObserver: BreakpointObserver,) {
    this.isRtl = dir.value === 'rtl';
    
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  public toggleDirection(event: MatSlideToggleChange ): void {
    this.direction = event.checked ? 'rtl' : 'ltr';
  }
}

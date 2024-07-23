import { Component, ViewEncapsulation } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/cdk/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-container-order-waste-contractor',

  templateUrl: './container-order-waste-contractor.component.html',
  styleUrl: './container-order-waste-contractor.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContainerOrderWasteContractorComponent {

  selectedIndex: number = 0;

  steps = [
    {
      label: 'הזמנת מכולה',
      subLabel: '(בתהליך)',
      icon: './icons/stepper/car.svg',
      state: 'car',
      completed: false,
    },
    {
      label: 'תעודת הזמנה',
      subLabel: '(טרם בוצע)',
      icon: './icons/stepper/list.svg',
      state: 'list',
      completed: false,
    },
    {
      label: 'תעודת איסוף',
      subLabel: '(טרם בוצע)',
      icon: './icons/stepper/delivery.svg',
      state: 'delivery',
      completed: false,
    },
    {
      label: 'תעודת הטמנה',
      subLabel: '(טרם בוצע)',
      icon: './icons/stepper/complete.svg',
      state: 'complete',
      completed: false,
    }
  ];

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }

  isStepCompleted(stepIndex: number): boolean {
    console.log(stepIndex);
    
    return this.steps[stepIndex].completed;
  }

  completeStep(stepIndex: number): void {
    this.steps[stepIndex].completed = true;
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}

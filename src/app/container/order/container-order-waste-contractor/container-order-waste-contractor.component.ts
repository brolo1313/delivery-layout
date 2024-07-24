import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { map, Observable } from "rxjs";
import { StepperOrientation } from "@angular/cdk/stepper";
import { BreakpointObserver } from "@angular/cdk/layout";
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-container-order-waste-contractor',

  templateUrl: './container-order-waste-contractor.component.html',
  styleUrl: './container-order-waste-contractor.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContainerOrderWasteContractorComponent {
  @ViewChild('stepper') stepper?: MatStepper;

  selectedIndex: number = 0;
  steps = [
    {
      label: 'הזמנת מכולה',
      subLabel: '(בתהליך)',
      icon: './assets/icons/stepper/car.svg',
      state: 'car',
      completed: false,
    },
    {
      label: 'תעודת הזמנה',
      subLabel: '(טרם בוצע)',
      icon: './assets/icons/stepper/list.svg',
      state: 'list',
      completed: false,
    },
    {
      label: 'תעודת איסוף',
      subLabel: '(טרם בוצע)',
      icon: './assets/icons/stepper/delivery.svg',
      state: 'delivery',
      completed: false,
    },
    {
      label: 'תעודת הטמנה',
      subLabel: '(טרם בוצע)',
      icon: './assets/icons/stepper/complete.svg',
      state: 'complete',
      completed: false,
    }
  ];

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  public setSelectedIndex(index: number): void {
    this.selectedIndex = index;
  }

  public isStepCompleted(stepIndex: number): boolean {
    return this.steps[stepIndex].completed;
  }

  public completeStep(stepIndex: number): void {
    this.steps[stepIndex].completed = true;
  }

  public submitStep(stepInfo: any, stepIndex: number) {
    this.completeStep(stepIndex);
    if (stepIndex < this.steps.length - 1) {
      this.stepper?.next();
    }
  }
}

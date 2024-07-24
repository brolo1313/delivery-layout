import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-step-order',
  templateUrl: './step-order.component.html',
  styleUrls: ['./step-order.component.scss']
})
export class StepOrderComponent {
  @Output() submitStep: EventEmitter<any> = new EventEmitter();
  public form: FormGroup = this.fb.group({
    projectName: ['', Validators.required],
    machineLocation: ['', Validators.required],
    desiredDate: ['', Validators.required],
    generalNotes: [''],
    removalContractor: ['', Validators.required],
    desiredContainerVolume: ['', Validators.required]
  });

  contractorOptions: any[] = [
    { value: 'option 1', viewValue: 'option1' },
    { value: 'option 2', viewValue: 'option2' },
  ];

  constructor(private fb: FormBuilder) {
    this.selectedOption = '1';
  }

  public selectedOption: string;

  public submit(stepInfo: any): void {
    this.submitStep.emit(stepInfo);
  }

}

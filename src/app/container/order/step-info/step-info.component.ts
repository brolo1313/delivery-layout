import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-step-info',
  templateUrl: './step-info.component.html',
  styleUrls: ['./step-info.component.scss']
})
export class StepInfoComponent {
  @Output() submitStep: EventEmitter<any> = new EventEmitter();

  public selectedOption: string;

  constructor() {
    this.selectedOption = '1';
  }

  public submit(stepInfo: any): void {
    this.submitStep.emit(stepInfo);
  }

}

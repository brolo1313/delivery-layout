import {Component, EventEmitter, inject, Input, model, Output, signal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DashboardComponent} from "../../../dashboard/dashboard.component";
import {Project} from "../../../../shared/enums/project.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FriendlyAddress} from "../../../../shared/friendlt-address.interface";

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrl: './new-project-modal.component.scss'
})
export class NewProjectModalComponent {
  readonly dialogRef = inject(MatDialogRef<DashboardComponent>);
  // @Input({required: true}) projectForm!: FormGroup;
  readonly projectForm = inject<FormGroup>(MAT_DIALOG_DATA);
  @Output() newProjectFormEvent = new EventEmitter();

  constructor(fb: FormBuilder) {

  }


  // readonly data = inject<Project>(MAT_DIALOG_DATA);
  // readonly projectName = model(this.data.name);
  // readonly projectAddress = model(this.data.address);

  onNoClick(): void {
    console.log(`is valid ${this.projectForm.valid}`);
    this.dialogRef.close();
  }

  submitNewProjectForm() {
    if (this.projectForm.valid) {
      this.dialogRef.close(this.projectForm.value);
    }
  }

  onPlaceChanged(place: google.maps.places.PlaceResult) {
    let fullAddress = ``;




  }

  onAddressChanged(address: FriendlyAddress) {
    this.projectForm.patchValue({street: address.street});
    this.projectForm.patchValue({streetNumber: address.streetNumber});
    this.projectForm.patchValue({city: address.city});
    this.projectForm.patchValue({lat: address.lat});
    this.projectForm.patchValue({lng: address.lng});
  }
}


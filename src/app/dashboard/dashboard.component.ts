import {Component, inject, model, signal, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {

  NewProjectModalComponent
} from "../project/project-creation-wizard/new-project-modal/new-project-modal.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../project/services/project.service";
import {AppResponse} from "../../shared/app-response";
import {Project} from "../../shared/enums/project.enum";
import {Router} from "@angular/router";
import {ColumnModel} from "../common/smart-table/table-models/column-model.interface";
//GOOGLE MAPS API KEY AIzaSyCjlZHe1I5oiHYjxQMB0lL6LSL4emQZWns
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  newProjectForm: FormGroup;

  constructor(private router: Router, private projectService:ProjectService, fb: FormBuilder) {
    this.newProjectForm = fb.group({
      projectName: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    // this.sidenav.scrollable.elementScrolled().subscribe(() => /* react to scrolling */);
  }

  closeSidenav() {
    this.sidenav.close();
  }

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);
  // development: string = `committeedash`;
  // development: string = `projectoverview`;
  development: string = `containerorderwastecontractor`;
  // development: string = `containerorderwasteproducer`;
  data: any[] = [];
  columns: ColumnModel[] = [];


  openNewProjectDialog(): void {
    const dialogRef = this.dialog.open(NewProjectModalComponent, {
      data: this.newProjectForm,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`dialogRef.afterClosed()`, result)
        this.handleNewProject(result);
      }
    });
  }


  private handleNewProject(newProject: any) {
      // console.log(`handleNewProject`, newProject);

      this.projectService.createNewProject(newProject)
        .then((resp:AppResponse<Project>)=>{
          console.log(`DashboardComp handleNewProject createNewProject resp:`, resp);
          const project = resp.data;
          this.projectService.updateSharedProject(project);
          this.router.navigate([`/project/${project.id}/overview`]);
        })
  }
}

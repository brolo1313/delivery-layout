import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {RouterModule} from "@angular/router";

import { routes } from './app.routes';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {StatsRowComponent} from "./dashboard/stats-row/stats-row.component";
import {SmartTableComponent} from "./common/smart-table/smart-table.component";
import {ProjectOverviewComponent} from "./project/project-overview/project-overview.component";
import {
  MatStep,
  MatStepContent,
  MatStepLabel,
  MatStepper, MatStepperIcon,
  MatStepperNext,
  MatStepperPrevious
} from "@angular/material/stepper";
import {
  NewProjectModalComponent
} from "./project/project-creation-wizard/new-project-modal/new-project-modal.component";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {ProjectCreationWizardComponent} from "./project/project-creation-wizard/project-creation-wizard.component"; // Import the routes
import { GoogleMapsModule } from '@angular/google-maps'
import {CommitteeDashboardComponent} from "./dashboard/committee-dashboard/committee-dashboard.component";
import {AddressAutocompleteComponent} from "./common/address-autocomplete/address-autocomplete.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {
  ContainerOrderWasteProducerComponent
} from "./container/order/container-order-waste-producer/container-order-waste-producer.component";
import {
  ContainerOrderWasteContractorComponent
} from "./container/order/container-order-waste-contractor/container-order-waste-contractor.component";
import {ContainerOrderTableComponent} from "./container/order/container-order-table/container-order-table.component";


@NgModule({
  declarations: [AppComponent, DashboardComponent,
    ProjectCreationWizardComponent, CommitteeDashboardComponent, ContainerOrderWasteContractorComponent,
    NewProjectModalComponent, ContainerOrderWasteProducerComponent, ProjectOverviewComponent,
    ContainerOrderTableComponent, LoginComponent,StatsRowComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    GoogleMapsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatError,
    MatLabel,
    FlexLayoutModule,
    ReactiveFormsModule,

    MatCardContent,
    MatCard,
    MatCardTitle,
    MatFormField,
    MatCardActions,
    MatCardHeader,
    RouterModule.forRoot(routes),
    MatGridList,
    MatGridTile,
    SmartTableComponent,
    MatStepper,
    MatStep,
    FormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    AddressAutocompleteComponent,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatStepperNext,
    MatStepLabel,
    MatStepperPrevious,
    MatStepContent,
    MatStepperIcon
    // Configure the router
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

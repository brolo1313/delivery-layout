import {ProjectStatus} from "../container-order-status.enum";
import {BlockPlot} from "../interfaces";

export enum ProjectWizardSettingsStatus {

    Editing = "editing",
    Filled = "filled",
    Error = "error"


}


export interface WizardSettings {
    [key: string]: any;
    currentWizardStep: number;
    generalInfoStepStatus: ProjectWizardSettingsStatus;
    contractorStepStatus: ProjectWizardSettingsStatus;
    wasteSiteStepStatus: ProjectWizardSettingsStatus;
    wasteContractorStepStatus: ProjectWizardSettingsStatus;
}

export interface Project {
    id: number;
    status: ProjectStatus;
    name: string;
    address: string;
    city: string;
    projectCreatorBusinessName: string;
    fullAddress: string;
    requestNumber: string;
    licenseNumber: string;
    builtSqmts: number;
    creationStep: number;
    activeOrders: number;
    exceededOrders: number;
    blockPlots: BlockPlot[];
    wizardSettings: WizardSettings;
    wizardReviewSettings: WizardSettings;
}

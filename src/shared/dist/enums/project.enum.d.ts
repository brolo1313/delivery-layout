import { ProjectStatus } from "../container-order-status.enum";
import { BlockPlot } from "../interfaces";
export declare enum ProjectWizardSettingsStatus {
    Editing = "editing"
}
export interface WizardSettings {
    currentCreationWizardStep: number;
    generalInfoStepStatus: ProjectWizardSettingsStatus;
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
}

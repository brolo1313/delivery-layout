// shared/interfaces.ts
import {OrderStatus, ProjectStatus} from "./container-order-status.enum";

export interface User {
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    address: string | null;
    city: string | null;
    fullAddress: string | null;
    businessName: string | null;
    cellPhoneNumber: string | null;
    email: string | null;
    types: string[] | null;
}


export interface WasteContractor extends User {
    status: string;
}

export interface Contractor extends User {
    status: string;
}


export interface WasteContractor extends User {
    status: string;
}

export interface InvitedContractor extends User {
    status: string;
    inviteDate: string;
    inviteHour: string;
}

export interface BlockPlot {
    id: number | null;
    plot: string;
    block: string;
}

export interface ContainerOrder {

    orderId: string;
    status: OrderStatus;
    state: string,
    volume: number;
    orderCreationDate: Date;
    contractorFullName: string;
    projectName: string;
    address: string;
    city: string;
    fullAddress: string;

    wasteContractor: WasteContractor;
    truck: Truck,
    container: Container

    // orderDate: Date;
    // orderStartTime: string;
    // orderEndTime: string;
    placementDateReq: Date;
    placementStartTimeReq: string;
    placementEndTimeReq: string;
    placementDateWcSet: Date;
    placementStartTimeWcSet: string;
    placementEndTimeWcSet: string;
    placementExitDateTime: Date;
    placementDateTimeReal: Date;

    pickupDateReq: Date;
    pickupStartTimeReq: string;
    pickupEndTimeReq: string;
    pickupDateWcSet: Date;
    pickupStartTimeWcSet: string;
    pickupEndTimeWcSet: string;
    pickupDateTimeReal: Date;


    wasteContractorName: string;
    comments: string;
    contacts: any[];


}


export interface Truck {

    truckId: string;
    licenseNumber: string;
    status: string;
    optionDisplay: string;

}


export interface Driver {

    driverId: string;
    firstName: string;
    lastName: string;
    fullName: string;
    licenseNumber: string;
    licenseTypes: string[];
    status: string;

}


export interface Container {

    containerId: string;
    licenseNumber: string;
    volume: number,
    status: string;
    optionDisplay: string;
}


export interface WasteSite {

    id: number;
    name: string;
    vat: string;
    address: string;
    city: string;
    agreementUri: string;
    agreementNumber: string;
    fullAddress: string;

}


export interface WasteContractorResources {

    trucks: Truck[];
    drivers: Driver[];
    containers: Container[];

}


export interface ContainerOrderTableData {

    containerOrders: ContainerOrder[];
    numOfActiveContainerOrders: number,
    numOfContainerOrdersAwaitingApproval: number,
    numOfContainerOrdersOnSite: number,
    numOfContainerOrdersExceedingTime: number,
    numOfContainerOrdersInShipping: number,
    numOfContainerOrdersCompleted: number,

}


export interface ProjectGuideline {
    comment: string;
    displayName: string;
    group: string;
    name: string;
    status: string;
}


export interface ProjectGuidelineWrapper {

    generalInfoGuideLines: ProjectGuideline[];
    contractorGuidelines: ProjectGuideline[];
    wasteContractorsGuidelines: ProjectGuideline[];
    wasteSiteGuidelines: ProjectGuideline[];

}


export interface ProjectGuidelineResponse {

    guidelinesData: ProjectGuidelineWrapper;
    reviewStatus: string;

}





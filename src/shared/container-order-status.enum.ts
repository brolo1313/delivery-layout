export enum OrderStatus {
    PendingWcApproval = 'pending_wc_approval',
    PendingShipping = 'pending_shipping',
    InShipping = 'in_shipping',
    OnSite = 'on_site',
    PickupReqPendingWcApproval = 'pickup_req_pending_wc_approval',
    PendingPickup = 'pending_pickup',
    InPickup = 'in_pickup',
    // Disposed = 'disposed',
    Completed = 'completed',
    // Exceeding = 'exceeding',
}


const orderStatusSortOrder: OrderStatus[] = [
    OrderStatus.PendingWcApproval,
    OrderStatus.PendingShipping,
    OrderStatus.InShipping,
    OrderStatus.OnSite,
    OrderStatus.PickupReqPendingWcApproval,
    OrderStatus.PendingPickup,
    OrderStatus.InPickup,
    OrderStatus.Completed
];

export function compareOrderStatus(status1: OrderStatus, status2: OrderStatus): number {
    const index1 = orderStatusSortOrder.indexOf(status1);
    const index2 = orderStatusSortOrder.indexOf(status2);

    if (index1 < index2) {
        return -1;
    } else if (index1 > index2) {
        return 1;
    } else {
        return 0;
    }
}



export enum ContainerOrderState  {
    PendingWcApproval = 'pending_wc_approval',
    PendingShipping = 'pending_shipping',
    PlacementDateExceeding = 'placement_date_exceeding',
    InShipping = 'in_shipping',
    OnSite = 'on_site',
    PickupReqPendingWcApproval = 'pickup_req_pending_wc_approval',
    PickupDateExceeding = 'pickup_date_exceeding',
    PendingPickup = 'pending_pickup',
    InPickup = 'in_pickup',
    Completed = 'completed',

}


export enum ProjectReviewStatus  {
    NotExists= "not_exists",
    Sent ="sent_to_review",
    Rejected = "rejected",
    Approved = "approved",

}


export enum ProjectStatus  {
    Draft= "draft",
    InReview ="in_review",
    Rejected = "rejected",
    Approved = "approved",

}


export enum CommitteeStatus  {
    Draft= "draft",
    InReview ="in_review",
    Rejected = "rejected",
    FixesInReview ="fixes_in_review",
    Approved = "approved",

}


const projectStatusSortOrder: ProjectStatus[] = [
    ProjectStatus.Draft,
    ProjectStatus.InReview,
    ProjectStatus.Rejected,
    ProjectStatus.Approved,
];

export function compareProjectStatus(status1: ProjectStatus, status2: ProjectStatus): number {
    const index1 = projectStatusSortOrder.indexOf(status1);
    const index2 = projectStatusSortOrder.indexOf(status2);

    if (index1 < index2) {
        return -1;
    } else if (index1 > index2) {
        return 1;
    } else {
        return 0;
    }
}

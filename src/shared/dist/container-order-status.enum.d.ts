export declare enum OrderStatus {
    PendingWcApproval = "pending_wc_approval",
    PendingShipping = "pending_shipping",
    InShipping = "in_shipping",
    OnSite = "on_site",
    PickupReqPendingWcApproval = "pickup_req_pending_wc_approval",
    PendingPickup = "pending_pickup",
    InPickup = "in_pickup",
    Completed = "completed"
}
export declare function compareOrderStatus(status1: OrderStatus, status2: OrderStatus): number;
export declare enum ContainerOrderState {
    PendingWcApproval = "pending_wc_approval",
    PendingShipping = "pending_shipping",
    PlacementDateExceeding = "placement_date_exceeding",
    InShipping = "in_shipping",
    OnSite = "on_site",
    PickupReqPendingWcApproval = "pickup_req_pending_wc_approval",
    PickupDateExceeding = "pickup_date_exceeding",
    PendingPickup = "pending_pickup",
    InPickup = "in_pickup",
    Completed = "completed"
}
export declare enum ProjectReviewStatus {
    NotExists = "not_exists",
    Sent = "sent_to_review",
    Rejected = "rejected",
    Approved = "approved"
}
export declare enum ProjectStatus {
    Draft = "draft",
    InReview = "in_review",
    Rejected = "rejected",
    Approved = "approved"
}
export declare enum CommitteeStatus {
    Draft = "draft",
    InReview = "in_review",
    Rejected = "rejected",
    FixesInReview = "fixes_in_review",
    Approved = "approved"
}
export declare function compareProjectStatus(status1: ProjectStatus, status2: ProjectStatus): number;

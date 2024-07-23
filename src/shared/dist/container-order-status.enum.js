"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitteeStatus = exports.ProjectStatus = exports.ProjectReviewStatus = exports.ContainerOrderState = exports.OrderStatus = void 0;
exports.compareOrderStatus = compareOrderStatus;
exports.compareProjectStatus = compareProjectStatus;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PendingWcApproval"] = "pending_wc_approval";
    OrderStatus["PendingShipping"] = "pending_shipping";
    OrderStatus["InShipping"] = "in_shipping";
    OrderStatus["OnSite"] = "on_site";
    OrderStatus["PickupReqPendingWcApproval"] = "pickup_req_pending_wc_approval";
    OrderStatus["PendingPickup"] = "pending_pickup";
    OrderStatus["InPickup"] = "in_pickup";
    // Disposed = 'disposed',
    OrderStatus["Completed"] = "completed";
    // Exceeding = 'exceeding',
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
const orderStatusSortOrder = [
    OrderStatus.PendingWcApproval,
    OrderStatus.PendingShipping,
    OrderStatus.InShipping,
    OrderStatus.OnSite,
    OrderStatus.PickupReqPendingWcApproval,
    OrderStatus.PendingPickup
];
function compareOrderStatus(status1, status2) {
    const index1 = orderStatusSortOrder.indexOf(status1);
    const index2 = orderStatusSortOrder.indexOf(status2);
    if (index1 < index2) {
        return -1;
    }
    else if (index1 > index2) {
        return 1;
    }
    else {
        return 0;
    }
}
var ContainerOrderState;
(function (ContainerOrderState) {
    ContainerOrderState["PendingWcApproval"] = "pending_wc_approval";
    ContainerOrderState["PendingShipping"] = "pending_shipping";
    ContainerOrderState["PlacementDateExceeding"] = "placement_date_exceeding";
    ContainerOrderState["InShipping"] = "in_shipping";
    ContainerOrderState["OnSite"] = "on_site";
    ContainerOrderState["PickupReqPendingWcApproval"] = "pickup_req_pending_wc_approval";
    ContainerOrderState["PickupDateExceeding"] = "pickup_date_exceeding";
    ContainerOrderState["PendingPickup"] = "pending_pickup";
    ContainerOrderState["InPickup"] = "in_pickup";
    ContainerOrderState["Completed"] = "completed";
})(ContainerOrderState || (exports.ContainerOrderState = ContainerOrderState = {}));
var ProjectReviewStatus;
(function (ProjectReviewStatus) {
    ProjectReviewStatus["NotExists"] = "not_exists";
    ProjectReviewStatus["Sent"] = "sent_to_review";
    ProjectReviewStatus["Rejected"] = "rejected";
    ProjectReviewStatus["Approved"] = "approved";
})(ProjectReviewStatus || (exports.ProjectReviewStatus = ProjectReviewStatus = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["Draft"] = "draft";
    ProjectStatus["InReview"] = "in_review";
    ProjectStatus["Rejected"] = "rejected";
    ProjectStatus["Approved"] = "approved";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
var CommitteeStatus;
(function (CommitteeStatus) {
    CommitteeStatus["Draft"] = "draft";
    CommitteeStatus["InReview"] = "in_review";
    CommitteeStatus["Rejected"] = "rejected";
    CommitteeStatus["FixesInReview"] = "fixes_in_review";
    CommitteeStatus["Approved"] = "approved";
})(CommitteeStatus || (exports.CommitteeStatus = CommitteeStatus = {}));
const projectStatusSortOrder = [
    ProjectStatus.Draft,
    ProjectStatus.InReview,
    ProjectStatus.Rejected,
    ProjectStatus.Approved,
];
function compareProjectStatus(status1, status2) {
    const index1 = projectStatusSortOrder.indexOf(status1);
    const index2 = projectStatusSortOrder.indexOf(status2);
    if (index1 < index2) {
        return -1;
    }
    else if (index1 > index2) {
        return 1;
    }
    else {
        return 0;
    }
}

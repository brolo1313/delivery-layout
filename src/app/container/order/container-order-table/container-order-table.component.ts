import { Component } from '@angular/core';
import {ColumnModel} from "../../../common/smart-table/table-models/column-model.interface";
import {ContainerService} from "../../service/container.service";
import {AppResponse} from "../../../../shared/app-response";
import {ContainerOrder} from "../../../../shared/interfaces";

@Component({
  selector: 'app-container-order-table',

  templateUrl: './container-order-table.component.html',
  styleUrl: './container-order-table.component.scss'
})
export class ContainerOrderTableComponent {

  columns: ColumnModel[] = [
    {displayName: 'Order Id', dataName: 'containerOrderId'},
    {displayName: 'order phase', dataName: 'phase'},
    {displayName: 'address', dataName: 'address'},
    {displayName: 'city', dataName: 'city'},
    {displayName: 'Waste contractor', dataName: 'wasteContractorFullName'},
    {displayName: 'Truck number', dataName: 'truckLicense'},
    {displayName: 'volume', dataName: 'volume'},
    {displayName: 'status', dataName: 'status'},
  ];

  containerOrders: ContainerOrder[] = [];

  constructor(containerService:ContainerService) {

    containerService.getContainerOrders()
      .then((resp:AppResponse<ContainerOrder[]>)=>{
          if (resp.status === 200){
            this.containerOrders = resp.data;
          } else {
            //TODO TOAST
          }
      })

  }


}

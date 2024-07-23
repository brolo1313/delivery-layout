import {AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild} from '@angular/core';
import {ColumnModel} from "../../common/smart-table/table-models/column-model.interface";

@Component({
  selector: 'app-committee-dashboard',

  templateUrl: './committee-dashboard.component.html',
  styleUrl: './committee-dashboard.component.scss'
})

export class CommitteeDashboardComponent{



  options: google.maps.MapOptions = {
    center: {lat: 32.0570894, lng: 34.769695},
    zoom: 15
  };

  onPlaceChanged($event: any) {

    console.log(`onPlaceChanged `, $event);
  }
}

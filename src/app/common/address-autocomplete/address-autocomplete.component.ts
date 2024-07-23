import {AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {GoogleMapsModule} from "@angular/google-maps";
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FriendlyAddress} from "../../../shared/friendlt-address.interface";

@Component({
  selector: 'app-address-autocomplete',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    GoogleMapsModule,
    ReactiveFormsModule,
    MatError,
    NgIf
  ],
  templateUrl: './address-autocomplete.component.html',
  styleUrl: './address-autocomplete.component.scss'
})
export class AddressAutocompleteComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef;

  @Output() addressChanged: EventEmitter<FriendlyAddress> = new EventEmitter();

  autocompleteInput!: string;
  queryWait!: boolean;
  isAddressComplete: boolean = false;

  constructor(
    private ngZone: NgZone) {
  }

  ngOnInit() {
  }

  extractFriendlyAddress() {

  }

  ngAfterViewInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement, {
      types: ['address']
    });

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();

        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log('Place:', place);
        console.log('lat, long:', place.geometry.location?.lat(), place.geometry.location?.lng());
        // Handle the selected place

        // this.placeChanged.emit(place);
        if (!place.address_components) {
          this.isAddressComplete = false;
          return;
        }
        const streetNumber = place.address_components.find(ac => {
          return ac.types.includes(`street_number`);
        })

        if (!streetNumber) {
          this.isAddressComplete = true;
          return;
        }

        const route = place.address_components.find(ac => {
          return ac.types.includes(`route`);
        })
        if (!route) {
          this.isAddressComplete = true;
          return;
        }
        const city = place.address_components.find(ac => {
          return ac.types.includes(`locality`);
        })
        if (!city) {
          this.isAddressComplete = true;
          return;
        }

        if (!place.geometry.location) {
          this.isAddressComplete = true;
          return;
        }
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        this.addressChanged.emit({
          streetNumber: streetNumber.long_name,
          street: route.long_name,
          city: city.long_name, lat, lng
        });

      });
    });
  }


  onInputChange() {

  }
}

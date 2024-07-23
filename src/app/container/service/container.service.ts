import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../common/auth/auth.service";
import {firstValueFrom, ReplaySubject} from "rxjs";
import {Project} from "../../../shared/enums/project.enum";
import {AppConstants} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  // private projectSubject = new ReplaySubject<Project>();
  // project$ = this.projectSubject.asObservable();


  constructor(private http: HttpClient, private authService: AuthService) { }



  getContainerOrders(){
    return firstValueFrom(this.http.get<any>(`${AppConstants.API_ENDPOINT}/container/order/orders`, {headers: this.authService.getAuthHeaders()}));
  }


}

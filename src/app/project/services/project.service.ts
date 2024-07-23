import { Injectable } from '@angular/core';
import {BehaviorSubject, firstValueFrom, Observable, ReplaySubject} from "rxjs";
import {AppConstants} from "../../app.constants";
import {AuthService} from "../../common/auth/auth.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from "../../../shared/enums/project.enum";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectSubject = new ReplaySubject<Project>();
  project$ = this.projectSubject.asObservable();


  constructor(private http: HttpClient, private authService: AuthService) {

  }

  updateSharedProject(project: Project) {
    this.projectSubject.next(project);
  }

  createNewProject(project: any): Promise<any> {
    return firstValueFrom(
      this.http.post<any>(`${AppConstants.API_ENDPOINT}/project/createNewProject`, project, {headers: this.authService.getAuthHeaders()})
    );
  }


}

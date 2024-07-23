import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, firstValueFrom, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {jwtDecode} from 'jwt-decode';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

declare var localStorage: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/user';
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('jwtToken'));
  token$ = this.tokenSubject.asObservable();
  public user: any;


  constructor(private http: HttpClient,

              private router: Router) {
  }


  login(businessNumber: string, password: string): Promise<any> {
    return firstValueFrom(this.http.post<{ token: string }>(`${this.apiUrl}/login`, {vat: businessNumber, password})
      .pipe(
        tap((response:any) => {
          console.log(response);
          if (response.data) {
            this.tokenSubject.next(response.data);
            localStorage.setItem('jwtToken', response.data);
            this.user = this.decodeToken();
          }
        })
      ));
  }


  public getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    // console.log(`token = ${token}`);
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }


  getToken(): string | null {
    return this.tokenSubject.getValue();
  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.getToken();
    // console.log(`canActivate token `, token);
    if (token) {
      return true;
    } else {
      // console.log(`Redirecting to login`);
      this.router.navigate(['/login']);
      return false;
    }
  }


  logout() {
    this.tokenSubject.next(null);
    console.log(`logout() `, this.getToken());
    localStorage.removeItem('jwtToken');
  }

  canActivateRole(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const decodedToken = this.decodeToken();

    if (decodedToken) {
      // const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const userRoles = decodedToken.roles;

      const roleComponentMap = next.data[`roleComponentMap`];
      const component = roleComponentMap.find((map: any) => userRoles.includes(map.role));

      if (component) {
        this.router.navigate([component.component]);
        return false;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginData, LoginToken } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../key';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  formString = '';

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  setString(string) {
    this.formString = string;
  }

  getString() {
    return this.formString;
  }

  doLogin(loginInfo: LoginData) {
    this.spinner.show();
    return this.http
      .post<LoginToken>(environment.API + '/login/', loginInfo)
      .pipe(
        map(data => {
          if (!data.token) {
            return data;
          }
          const token = JSON.stringify(data.token);
          const decode = helper.decodeToken(token);
          if (token) {
            localStorage.setItem('token', token);
          }
          return decode;
        })
      );
  }

  checkIfAlreadyRegistered(email): Observable<{ token: string }> {
    return this.http.get<{ token: string }>(
      `${environment.API}/login/checkAlreadyRegistered/${email}`
    );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !helper.isTokenExpired(token);
  }
  public userInfo() {
    const token = localStorage.getItem('token');
    const decode = helper.decodeToken(token);
    return decode;
  }
}

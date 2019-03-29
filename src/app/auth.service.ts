import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginData, LoginToken } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../key';
import { map } from 'rxjs/operators';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  formString = '';

  constructor(private http: HttpClient) {}

  setString(string) {
    this.formString = string;
  }

  getString() {
    return this.formString;
  }

  doLogin(loginInfo: LoginData) {
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

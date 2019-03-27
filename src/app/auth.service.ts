import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginData, LoginToken } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../key';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userLogin(loginInfo: LoginData) {
    return this.http
      .post<LoginToken>(environment.API + '/login/', loginInfo)
      .pipe(map(data => {}));
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'key';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) {}
  public uri: string = environment.API;

  signUp(userInfo) {
    return this.http.post(`${this.uri}/user/signup`, userInfo);
  }
}

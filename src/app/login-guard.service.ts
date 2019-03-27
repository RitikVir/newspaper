import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(private route: Router, private auth: AuthService) {}
  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token === null) {
      return true;
    } else {
      if (!this.auth.isAuthenticated()) {
        return true;
      }
      const tokenPayLoad = helper.decodeToken(token);
      if (tokenPayLoad.role === 'user') {
        this.route.navigate(['/user']);
      } else if (tokenPayLoad.role === 'admin') {
        this.route.navigate(['/admin']);
      } else {
        this.route.navigate(['/client']);
      }
      return true;
    }
  }
}

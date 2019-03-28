import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('token');

    if (token === null || helper.isTokenExpired(token)) {
      localStorage.removeItem('token');
      this.route.navigate(['/login']);
      return true;
    }
    const tokenPayLoad = helper.decodeToken(token);

    if (this.auth.isAuthenticated() && expectedRole === tokenPayLoad.role) {
      if (tokenPayLoad.role === 'user' && !tokenPayLoad.isVerifiedOtp) {
        console.log('Otp Not verified');
        this.route.navigate(['/user/otpverify']);
        return true;
      }
      return true;
    } else {
      this.route.navigate(['/login']);
    }
  }
}

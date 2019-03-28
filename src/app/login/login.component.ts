import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgroup = new FormGroup({
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  routeToSignUp() {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {}
  onSubmit() {
    const loginInfo = this.formgroup.value;
    this.auth.doLogin(loginInfo).subscribe(data => {
      console.log(data);
      if (data.role === 'admin') {
        this.router.navigate(['/admin/profile']);
      } else if (data.role === 'client') {
        this.router.navigate(['/client/profile']);
      } else if (data.role === 'user') {
        this.router.navigate(['/story']);
      } else if (data.role === 'writer') {
        this.router.navigate(['/writer']);
      } else {
        this.toastr.error('Invalid Credentials');
      }
    });
  }
}

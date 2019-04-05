import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../signup.service';
import {
  AuthService as SocialAuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
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

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phoneNumber: [
      [
        '',
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
    ]
  });

  socialAuthForm = this.fb.group({
    phoneNumber: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
    ]
  });

  currentComponent: string;
  socialUserInfo: any;
  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private signup: SignupService,
    private socialAuth: SocialAuthService,
    private spinner: NgxSpinnerService
  ) {}

  openLogin() {
    this.currentComponent = 'login';
  }

  openSignUp() {
    this.currentComponent = 'signUp';
  }

  ngOnInit() {
    this.currentComponent = 'login';
  }
  onSubmit() {
    const loginInfo = this.formGroup.value;
    this.auth.doLogin(loginInfo).subscribe(data => {
      this.spinner.hide();
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

  onPressSignUp() {
    this.signup
      .signUp(this.signUpForm.value)
      .subscribe(() => console.log('signup done'));
  }

  onPressSocialSignIn() {
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData => {
      // console.log(userData);
      this.socialUserInfo = userData;
      this.auth.checkIfAlreadyRegistered(userData.email).subscribe(data => {
        console.log('token  ', data.token);
        if (data.token !== null) {
          localStorage.setItem('token', data.token.toString());
        } else {
          console.log('clicked');

          document.getElementById('modalButton').click();
        }
      });
    });
  }

  onFinishSocialSignIn() {
    let userInfo = {
      name: this.socialUserInfo.name,
      email: this.socialUserInfo.email,
      phoneNumber: this.socialAuthForm.value.phoneNumber
    };
    this.signup.socialSignUp(userInfo).subscribe(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/user']);
      } else {
        alert('Error signing up');
      }
    });
  }
}

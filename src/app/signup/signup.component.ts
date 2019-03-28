import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private signup: SignupService
  ) {}

  formGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });

  onSubmit() {
    this.signup
      .signUp(this.formGroup.value)
      .subscribe(() => console.log('signup done'));
  }

  routeToLogin() {
    this.route.navigate(['/login']);
  }

  ngOnInit() {}
}

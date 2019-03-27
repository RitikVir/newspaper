import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formgroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
     let loginInfo= this.formgroup.value;
     
  }

}

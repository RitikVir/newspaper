import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  constructor(private auth: AuthService) {}
  str: string = '';
  ngOnInit() {
    console.log(this.auth.getString());
    this.str = this.auth.getString();
    document.getElementById('abc').innerHTML = this.str;

    let inputFields = document.getElementById('f1') as HTMLFormElement;
    inputFields.submit();
  }
}

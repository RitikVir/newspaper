import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../key';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { ClientServService } from '../../client-serv.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  env = environment;

  constructor(
    private auth: AuthService,
    private getClientService: ClientServService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  formgroup = new FormGroup({
    units: new FormControl('', Validators.required)
  });

  ngOnInit() {}
  onSubmit() {
    let transactionInfo = {
      amount: this.formgroup.get('units').value * environment.price,
      userId: this.auth.userInfo().userId
    };
    this.getClientService.makePayment(transactionInfo).subscribe(data => {
      this.spinner.hide();
      console.log(data);
      this.auth.setString(data.formString);
      this.router.navigate(['/client/makepayment']);
    });
  }
}

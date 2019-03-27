import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {AdminServiceService} from '../admin-service.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  formgroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [ Validators.minLength(10), Validators.maxLength(10)])
  });
  constructor(
    private getAdminService: AdminServiceService,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
  }

  onSubmit() {
    this.getAdminService.addClient(this.formgroup.value).subscribe( data => {
      if (data.status) {
        console.log('Added');
        this.toastr.success('Client Added with 10 story and 5 Poll');
      } else {
        this.toastr.error('Use Different Contact Number');
      }
    });
    this.formgroup.reset();
  }

}

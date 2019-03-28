import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminServiceService } from '../../admin-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-writer',
  templateUrl: './add-writer.component.html',
  styleUrls: ['./add-writer.component.css']
})
export class AddWriterComponent implements OnInit {
  formgroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
  });
  constructor(
    private getAdminService: AdminServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.getAdminService.addWriter(this.formgroup.value).subscribe(data => {
      if (data.status) {
        this.toastr.success('New Content Writer Added');
      } else {
        this.toastr.error('Try another contact number');
      }
    });
    this.formgroup.reset();
  }
}

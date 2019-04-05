import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientServService } from '../../client-serv.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-request-poll',
  templateUrl: './request-poll.component.html',
  styleUrls: ['./request-poll.component.css']
})
export class RequestPollComponent implements OnInit {
  filename;
  string = '';
  formgroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    detail: new FormControl('', [
      Validators.required,
      Validators.maxLength(300)
    ]),
    imageUrl: new FormControl()
  });

  constructor(
    private getClientService: ClientServService,
    private toastr: ToastrService,
    private auth: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}
  imageChanged(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formgroup.get('imageUrl').setValue(file);
      this.filename = file.name;
    }
  }

  onSubmit() {
    const requestPollInfo = this.formgroup.value;
    console.log(requestPollInfo);
    requestPollInfo.authorId = this.auth.userInfo().userId;
    this.getClientService.requestPoll(requestPollInfo).subscribe(data => {
      this.spinner.hide();
      console.log(data);
      if (data.status) {
        const formData = new FormData();
        formData.append('imageUrl', this.formgroup.value.imageUrl);
        this.getClientService
          .addImageToPoll(data._id, formData)
          .subscribe(response => {
            this.spinner.hide();
            if (response.status) {
              this.toastr.success('Poll Request Made');
              this.formgroup.reset();
              this.filename = '';
            }
          });
      } else {
        this.toastr.error(data.comment);
      }
    });
  }
}

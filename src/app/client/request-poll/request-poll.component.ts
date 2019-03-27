import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ClientServService} from '../client-serv.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-request-poll',
  templateUrl: './request-poll.component.html',
  styleUrls: ['./request-poll.component.css']
})
export class RequestPollComponent implements OnInit {

  formgroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    detail: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    imageUrl: new FormControl('', Validators.required)
  })
  constructor(
    private getClientService: ClientServService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  imageChanged(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.formgroup.get('imageUrl').setValue(file);
    }
  }
  onSubmit() {

    const requestPollInfo = this.formgroup.value;
    requestPollInfo.authorId = 1;
    //give this field value of current login user
    this.getClientService.requestPoll(requestPollInfo).subscribe(data => {
      if(data.status){
        const formData = new FormData();
        formData.append('imageUrl', this.formgroup.get('imageUrl').value);
        this.getClientService.addImageToPoll(data._id,formData).subscribe(response => {
          console.log('@@@@@@@@@@@@', response);
          this.toastr.success('Poll Request Made');
        })
      }
    })

    this.formgroup.reset();
  }


}

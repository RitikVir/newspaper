import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientServService } from '../../client-serv.service';
import { AuthService } from '../../../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-story',
  templateUrl: './request-story.component.html',
  styleUrls: ['./request-story.component.css']
})
export class RequestStoryComponent implements OnInit {
  filename;
  formgroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    detail: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ]),
    imageUrl: new FormControl(),
    storyUrl: new FormControl('', Validators.required)
  });
  constructor(
    private getClientService: ClientServService,
    private auth: AuthService,
    private toastr: ToastrService
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
    const formData = new FormData();
    formData.append('heading', this.formgroup.value.heading);
    formData.append('detail', this.formgroup.value.detail);
    formData.append('imageUrl', this.formgroup.value.imageUrl);
    formData.append('storyUrl', this.formgroup.value.storyUrl);
    formData.append('authorId', this.auth.userInfo().userId);

    this.getClientService.requestStory(formData).subscribe(data => {
      if (!data.status) {
        this.toastr.error('Recharge ur Stories');
      } else {
        this.toastr.success('Request Generated');
      }
      this.formgroup.reset();
      this.filename = '';
    });
  }
}

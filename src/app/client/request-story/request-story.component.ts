import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientServService } from '../client-serv.service';

@Component({
  selector: 'app-request-story',
  templateUrl: './request-story.component.html',
  styleUrls: ['./request-story.component.css']
})
export class RequestStoryComponent implements OnInit {
  formgroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    detail: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ]),
    imageUrl: new FormControl('', Validators.required),
    storyUrl: new FormControl('', Validators.required)
  });
  constructor(private getClientService: ClientServService) {}

  ngOnInit() {}
  imageChanged(event) {}
  onSubmit() {
    const RequestStoryInfo = this.formgroup.value;
    RequestStoryInfo.authorId = 1;
    // give this field value of current logged user
  }
}

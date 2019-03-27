import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { PollService } from 'src/app/poll.service';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private poll: PollService
  ) {}

  formGroup = this.fb.group({
    heading: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    lastDate: new FormControl(),
    imageUrl: new FormControl()
  });

  handleChange(event) {
    if (event.target.files.length > 0) {
      this.formGroup.get('imageUrl').setValue(event.target.files[0]);
    }
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('heading', this.formGroup.value.heading);
    formData.append('detail', this.formGroup.value.detail);
    formData.append('lastDate', this.formGroup.value.lastDate);
    formData.append('imageUrl', this.formGroup.value.imageUrl);
    formData.append('authorRole', 'writer');
    formData.append('positiveCount', '0');
    formData.append('negativeCount', '0');
    formData.append('neutralCount', '0');
    formData.append('authorId', this.auth.userInfo().userId);

    this.poll.addPoll(formData).subscribe(data => alert(data.message));
  }

  ngOnInit() {}
}

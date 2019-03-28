import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { StoryService } from '../../story.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private story: StoryService
  ) {}

  formGroup = this.fb.group({
    heading: ['', Validators.required],
    detail: ['', Validators.required],
    imageUrl: ['', Validators.required],
    storyUrl: ['', Validators.required]
  });

  onSelectImage(event) {
    if (event.target.files.length > 0) {
      this.formGroup.get('imageUrl').setValue(event.target.files[0]);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('heading', this.formGroup.value.heading);
    formData.append('detail', this.formGroup.value.detail);
    formData.append('imageUrl', this.formGroup.value.imageUrl);
    formData.append('storyUrl', this.formGroup.value.storyUrl);
    formData.append('authorRole', 'writer');
    formData.append('views', '0');
    formData.append('authorId', this.auth.userInfo().userId);

    this.story.addStory(formData).subscribe(data => alert(data.message));
  }

  ngOnInit() {}
}

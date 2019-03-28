import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { environment } from 'key';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  constructor(private story: StoryService, private auth: AuthService) {}

  stories: any;
  loggedIn: boolean;
  userId: any;

  getFileUrl(filename) {
    return `${environment.API}/story/storyImage/${filename}`;
  }

  addBookMark(storyId) {
    this.story
      .addBookMark({ storyId: storyId, userId: this.auth.userInfo().userId })
      .subscribe(data => alert(data.message));
  }

  ngOnInit() {
    this.loggedIn =
      this.auth.userInfo() && this.auth.userInfo().role === 'user';
    this.story.getActiveStories().subscribe(data => (this.stories = data));
  }
}

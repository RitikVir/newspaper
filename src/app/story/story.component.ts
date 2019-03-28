import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { environment } from 'key';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  constructor(private story: StoryService) {}

  stories: any;

  getFileUrl(filename) {
    return `${environment.API}/story/storyImage/${filename}`;
  }

  ngOnInit() {
    this.story.getActiveStories().subscribe(data => (this.stories = data));
  }
}

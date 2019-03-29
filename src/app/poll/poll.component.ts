import { Component, OnInit } from '@angular/core';
import { PollService } from '../writer/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  loading: Boolean = false;
  pollDetails: any;
  polls: [];

  constructor(private pollService: PollService) { }

  getFileUrl(filename) {
    return `api/story/storyImage/${filename}`;
  }

  ngOnInit() {
    this.loading = true;
    this.pollService.getPolls({}).subscribe(response => {
      console.log(response);
      this.pollDetails = response;
      this.polls = this.pollDetails.result;
      this.loading = false;
    })
  }

}

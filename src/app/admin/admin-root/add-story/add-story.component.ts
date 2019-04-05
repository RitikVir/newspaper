import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  allStory;
  constructor(
    private getAdminService: AdminServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getAdminService.pendingStoryRequest().subscribe(stories => {
      this.spinner.hide();

      this.allStory = stories;
    });
  }
}

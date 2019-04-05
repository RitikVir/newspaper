import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {
  allPoll;
  constructor(
    private getAdminService: AdminServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getAdminService.pendingPollRequest().subscribe(polls => {
      this.spinner.hide();
      this.allPoll = polls;
    });
  }
}

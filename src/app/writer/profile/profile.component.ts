import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private writer: ProfileService, private auth: AuthService) {}

  profile: any;

  ngOnInit() {
    this.writer
      .getWriterProfile(this.auth.userInfo().userId)
      .subscribe(data => {
        data.success ? (this.profile = data.writerInfo) : alert(data.message);
      });
  }
}

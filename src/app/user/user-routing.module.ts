import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkComponent } from './user-root/bookmark/bookmark.component';
import { TopicComponent } from './user-root/topic/topic.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';

const routes: Routes = [
  { path: 'bookmark', component: BookmarkComponent },
  { path: 'topic', component: TopicComponent },
  { path: 'otpverify', component: OtpverifyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

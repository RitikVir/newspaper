import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPollComponent } from './add-poll/add-poll.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'addpoll',
    component: AddPollComponent
  },
  {
    path: 'addstory',
    component: AddStoryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule {}

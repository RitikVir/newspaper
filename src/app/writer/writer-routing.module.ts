import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPollComponent } from './add-poll/add-poll.component';
import { AddStoryComponent } from './add-story/add-story.component';

const routes: Routes = [
  {
    path: 'addpoll',
    component: AddPollComponent
  },
  {
    path: 'addstory',
    component: AddStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule {}

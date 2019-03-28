import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './admin-root/add-client/add-client.component';
import { AddWriterComponent } from './admin-root/add-writer/add-writer.component';
import { AddStoryComponent } from './admin-root/add-story/add-story.component';
import { AddPollComponent } from './admin-root/add-poll/add-poll.component';
import { ProfileComponent } from './admin-root/profile/profile.component';

const routes: Routes = [
  { path: 'addclient', component: AddClientComponent },
  {
    path: 'addwriter',
    component: AddWriterComponent
  },
  {
    path: 'addstory',
    component: AddStoryComponent
  },
  {
    path: 'addpoll',
    component: AddPollComponent
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
export class AdminRoutingModule {}

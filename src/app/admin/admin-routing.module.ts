import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddWriterComponent } from './add-writer/add-writer.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { AddPollComponent } from './add-poll/add-poll.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

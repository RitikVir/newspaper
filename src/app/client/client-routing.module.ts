import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestPollComponent } from './request-poll/request-poll.component';
import { RequestStoryComponent } from './request-story/request-story.component';

const routes: Routes = [
  { path: 'pricing', component: PricingComponent },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'requestpoll',
    component: RequestPollComponent
  },
  {
    path: 'requeststory',
    component: RequestStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}

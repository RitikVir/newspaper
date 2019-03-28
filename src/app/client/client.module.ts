import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestStoryComponent } from './client-root/request-story/request-story.component';
import { RequestPollComponent } from './client-root/request-poll/request-poll.component';
import { ProfileComponent } from './client-root/profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PricingComponent } from './client-root/pricing/pricing.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientRootComponent } from './client-root/client-root.component';

@NgModule({
  declarations: [
    RequestStoryComponent,
    RequestPollComponent,
    ProfileComponent,
    PricingComponent,
    ClientRootComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ClientRoutingModule]
})
export class ClientModule {}

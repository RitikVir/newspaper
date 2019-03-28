import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WriterRoutingModule } from './writer-routing.module';
import { AddStoryComponent } from './add-story/add-story.component';
import { AddPollComponent } from './add-poll/add-poll.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AddStoryComponent, AddPollComponent, ProfileComponent],
  imports: [CommonModule, WriterRoutingModule, ReactiveFormsModule]
})
export class WriterModule {}

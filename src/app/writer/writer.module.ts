import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WriterRoutingModule } from './writer-routing.module';
import { AddStoryComponent } from './writer-root/add-story/add-story.component';
import { AddPollComponent } from './writer-root/add-poll/add-poll.component';
import { ProfileComponent } from './writer-root/profile/profile.component';
import { WriterRootComponent } from './writer-root/writer-root.component';

@NgModule({
  declarations: [
    AddStoryComponent,
    AddPollComponent,
    ProfileComponent,
    WriterRootComponent
  ],
  imports: [CommonModule, WriterRoutingModule, ReactiveFormsModule]
})
export class WriterModule {}

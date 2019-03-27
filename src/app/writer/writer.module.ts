import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterRoutingModule } from './writer-routing.module';
import { AddStoryComponent } from './add-story/add-story.component';
import { AddPollComponent } from './add-poll/add-poll.component';

@NgModule({
  declarations: [AddStoryComponent, AddPollComponent],
  imports: [CommonModule, WriterRoutingModule]
})
export class WriterModule {}

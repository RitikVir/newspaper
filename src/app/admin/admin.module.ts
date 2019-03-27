import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './add-client/add-client.component';
import { AddWriterComponent } from './add-writer/add-writer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddStoryComponent } from './add-story/add-story.component';
import { AddPollComponent } from './add-poll/add-poll.component';

@NgModule({
  declarations: [AddClientComponent, AddWriterComponent, AddStoryComponent, AddPollComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AdminRoutingModule]
})
export class AdminModule {}

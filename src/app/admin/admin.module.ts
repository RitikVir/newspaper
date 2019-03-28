import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './add-client/add-client.component';
import { AddWriterComponent } from './add-writer/add-writer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddStoryComponent } from './add-story/add-story.component';
import { AddPollComponent } from './add-poll/add-poll.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { ClientRootComponent } from './client-root/client-root.component';

@NgModule({
  declarations: [AddClientComponent, AddWriterComponent, AddStoryComponent, AddPollComponent, ProfileComponent, AdminComponent, AdminRootComponent, ClientRootComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AdminRoutingModule]
})
export class AdminModule {}

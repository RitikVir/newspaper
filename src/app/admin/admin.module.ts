import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddClientComponent } from './admin-root/add-client/add-client.component';
import { AddWriterComponent } from './admin-root/add-writer/add-writer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddStoryComponent } from './admin-root/add-story/add-story.component';
import { AddPollComponent } from './admin-root/add-poll/add-poll.component';
import { ProfileComponent } from './admin-root/profile/profile.component';
import { AdminRootComponent } from './admin-root/admin-root.component';

@NgModule({
  declarations: [
    AddClientComponent,
    AddWriterComponent,
    AddStoryComponent,
    AddPollComponent,
    ProfileComponent,
    AdminRootComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}

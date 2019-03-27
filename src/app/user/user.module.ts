import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { TopicComponent } from './topic/topic.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [BookmarkComponent, TopicComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}

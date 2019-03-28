import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { TopicComponent } from './topic/topic.component';
import { UserRoutingModule } from './user-routing.module';
import { UserRootComponent } from './user-root/user-root.component';

@NgModule({
  declarations: [BookmarkComponent, TopicComponent, UserRootComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}

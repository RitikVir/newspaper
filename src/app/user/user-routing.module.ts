import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkComponent } from './user-root/bookmark/bookmark.component';
import { TopicComponent } from './user-root/topic/topic.component';

const routes: Routes = [
  { path: 'bookmark', component: BookmarkComponent },
  { path: 'topic', component: TopicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

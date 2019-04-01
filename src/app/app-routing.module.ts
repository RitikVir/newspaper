import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { PollComponent } from './poll/poll.component';
import { RoleGuardService } from './role-guard.service';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './login-guard.service';

const routes: Routes = [
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'poll',
    component: PollComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService]
  },

  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [RoleGuardService],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule',
    canActivate: [RoleGuardService],
    data: { expectedRole: 'client' }
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [RoleGuardService],
    data: { expectedRole: 'user' }
  },
  {
    path: 'writer',
    loadChildren: './writer/writer.module#WriterModule',
    canActivate: [RoleGuardService],
    data: { expectedRole: 'writer' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

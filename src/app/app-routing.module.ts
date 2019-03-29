import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { PollComponent } from './poll/poll.component';
import { RoleGuardService } from './role-guard.service';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './login-guard.service';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
=======
>>>>>>> c74967fad05f4d27bb7d55d8825ee7f010cb9661

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
  },
  {
    path: 'story',
    component: StoryComponent
<<<<<<< HEAD
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'makepayment',
    component: MakePaymentComponent
=======
>>>>>>> c74967fad05f4d27bb7d55d8825ee7f010cb9661
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './client-root/pricing/pricing.component';
import { ProfileComponent } from './client-root/profile/profile.component';
import { RequestPollComponent } from './client-root/request-poll/request-poll.component';
import { RequestStoryComponent } from './client-root/request-story/request-story.component';
import { MakePaymentComponent } from './client-root/make-payment/make-payment.component';
import { PaymentStatusComponent } from './client-root/payment-status/payment-status.component';

const routes: Routes = [
  { path: 'pricing', component: PricingComponent },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'requestpoll',
    component: RequestPollComponent
  },
  {
    path: 'requeststory',
    component: RequestStoryComponent
  },
  {
    path: 'makepayment',
    component: MakePaymentComponent
  },
  {
    path: 'paymentstatus/:status',
    component: PaymentStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}

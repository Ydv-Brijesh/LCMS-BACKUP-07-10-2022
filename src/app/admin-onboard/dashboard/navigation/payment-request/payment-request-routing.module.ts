import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentRequestComponent } from './add-payment-request/add-payment-request.component';
import { PaymentRequestComponent } from './payment-request.component';

const routes: Routes = [
  { path: '', component: PaymentRequestComponent },
  { path: 'add', component: AddPaymentRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRequestRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRequestRoutingModule } from './payment-request-routing.module';
import { PaymentRequestComponent } from './payment-request.component';
import { AddPaymentRequestComponent } from './add-payment-request/add-payment-request.component';

@NgModule({
  declarations: [PaymentRequestComponent,
    AddPaymentRequestComponent
  ],
  imports: [
    CommonModule,
    PaymentRequestRoutingModule
  ]
})
export class PaymentRequestModule { }

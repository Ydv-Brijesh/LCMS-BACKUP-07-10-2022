import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addpaymentRequest() {
    this.router.navigate(['/dashboard/navigation/payment-request/add'])
  }

}

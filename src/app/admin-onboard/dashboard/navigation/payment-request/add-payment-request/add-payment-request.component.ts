import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-payment-request',
  templateUrl: './add-payment-request.component.html',
  styleUrls: ['./add-payment-request.component.css']
})
export class AddPaymentRequestComponent implements OnInit {

  constructor(
    private router: Router,
    private toster: ToasterService){}

  ngOnInit(): void {
  }
  onSubmit() {
   
    this.toster.showSuccess('New Payment Request Successfully Added')
    this.router.navigate(['/dashboard/navigation/payment-request'])
  }

  cancel() {
    this.router.navigate(['/dashboard/navigation/payment-request'])

}

}

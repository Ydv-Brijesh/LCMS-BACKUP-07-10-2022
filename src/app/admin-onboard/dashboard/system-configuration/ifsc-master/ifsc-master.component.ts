import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ifsc-master',
  templateUrl: './ifsc-master.component.html',
  styleUrls: ['./ifsc-master.component.css']
})
export class IfscMasterComponent implements OnInit {
  constructor(
    private router: Router) { }

  ngOnInit(): void {
    // this.bank = this.data.getBank()
    // this.data.bankChange.subscribe((bank: Bank[]) => {
    //   this.bank = bank
    // })   
  }
  // addNewbank() {
  //   this.router.navigate(['/dashboard/system-configuration/bank/add'])
  // }
  addIfsc() {
    this.router.navigate(['/dashboard/system-configuration/ifscMaster/add'])
  }

}

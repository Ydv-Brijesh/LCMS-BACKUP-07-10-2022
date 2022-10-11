import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendor: any
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendor = this.data.getVendor()
    console.log(this.vendor);
    this.data.vendorChange.subscribe((vendor: Vendor[]) => {
      this.vendor = vendor
      console.log(vendor);

    })
  }
  addvendor() {
    this.router.navigate(['/dashboard/system-configuration/vendor/add'])
  }
}



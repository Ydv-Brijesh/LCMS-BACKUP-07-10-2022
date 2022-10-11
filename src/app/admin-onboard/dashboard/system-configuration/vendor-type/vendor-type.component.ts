import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorType } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-vendor-type',
  templateUrl: './vendor-type.component.html',
  styleUrls: ['./vendor-type.component.css']
})
export class VendorTypeComponent implements OnInit {
  vendorType!: VendorType[];
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendorType = this.data.getVendorType()
    console.log(this.vendorType);
    this.data.vendorTypeChange.subscribe((vendorType: VendorType[]) => {
      this.vendorType = vendorType
      console.log(vendorType);

    })   
  }
  addNewVendorType() {
    this.router.navigate(['/dashboard/system-configuration/vendorType/add'])
  }
}
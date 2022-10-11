import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-vendor-service',
  templateUrl: './vendor-service.component.html',
  styleUrls: ['./vendor-service.component.css']
})
export class VendorServiceComponent implements OnInit {

  vendorService!: VendorService[];
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendorService = this.data.getVendorService()
    console.log(this.vendorService);
    this.data.vendorServiceChange.subscribe((vendorService: VendorService[]) => {
      this.vendorService = vendorService
      console.log(vendorService);

    })   
  }
  addNewVendorService() {
    this.router.navigate(['/dashboard/system-configuration/vendorService/add'])
  }
}
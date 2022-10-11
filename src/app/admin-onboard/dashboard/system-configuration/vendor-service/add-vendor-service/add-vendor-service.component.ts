import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-vendor-service',
  templateUrl: './add-vendor-service.component.html',
  styleUrls: ['./add-vendor-service.component.css']
})
export class AddVendorServiceComponent implements OnInit {
  vendorService: UntypedFormGroup
  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.vendorService = this.formBuilder.group({
      vendorServiceCode: [''],
      vendorServiceName: [''],
      vendorServiceDescription: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newvendorService = [new VendorService(
      this.vendorService.value.vendorServiceCode,
      this.vendorService.value.vendorServiceName,
      this.vendorService.value.vendorServiceDescription,

    )]
    this.data.addnewVendorService(newvendorService)
    this.toster.showSuccess('New Vendor Service Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/vendorService'])

  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/vendorService'])
  }
}

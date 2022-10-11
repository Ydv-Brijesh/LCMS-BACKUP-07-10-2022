import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorServiceRoutingModule } from './vendor-service-routing.module';
import { AddVendorServiceComponent } from './add-vendor-service/add-vendor-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorServiceComponent } from './vendor-service.component';


@NgModule({
  declarations: [VendorServiceComponent,
    AddVendorServiceComponent
  ],
  imports: [
    CommonModule,
    VendorServiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class VendorServiceModule { }

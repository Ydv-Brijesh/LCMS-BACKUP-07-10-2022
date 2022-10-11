import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorServiceComponent } from './add-vendor-service/add-vendor-service.component';
import { VendorServiceComponent } from './vendor-service.component';

const routes: Routes = [
  { path: '', component: VendorServiceComponent},
  { path: 'add', component: AddVendorServiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorServiceRoutingModule { }

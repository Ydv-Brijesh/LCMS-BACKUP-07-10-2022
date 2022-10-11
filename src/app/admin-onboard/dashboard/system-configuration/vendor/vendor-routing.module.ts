import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
  { path: '', component: VendorComponent},
  { path: 'add', component: AddVendorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }

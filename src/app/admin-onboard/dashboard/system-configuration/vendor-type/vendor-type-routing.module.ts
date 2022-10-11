import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorTypeComponent } from './add-vendor-type/add-vendor-type.component';
import { VendorTypeComponent } from './vendor-type.component';

const routes: Routes = [
  { path: '', component: VendorTypeComponent},
  { path: 'add', component: AddVendorTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorTypeRoutingModule { }

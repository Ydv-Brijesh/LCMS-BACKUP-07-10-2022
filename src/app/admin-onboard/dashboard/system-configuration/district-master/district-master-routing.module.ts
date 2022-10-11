import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDistrictMasterComponent } from './add-district-master/add-district-master.component';
import { DistrictMasterComponent } from './district-master.component';

const routes: Routes = [
  { path: '', component: DistrictMasterComponent },
  { path: 'add', component: AddDistrictMasterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictMasterRoutingModule { }

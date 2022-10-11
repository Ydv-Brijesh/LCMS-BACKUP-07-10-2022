import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictMasterRoutingModule } from './district-master-routing.module';
import { AddDistrictMasterComponent } from './add-district-master/add-district-master.component';


@NgModule({
  declarations: [
    AddDistrictMasterComponent
  ],
  imports: [
    CommonModule,
    DistrictMasterRoutingModule
  ]
})
export class DistrictMasterModule { }

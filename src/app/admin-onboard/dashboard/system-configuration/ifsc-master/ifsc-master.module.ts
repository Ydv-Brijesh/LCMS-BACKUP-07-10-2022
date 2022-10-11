import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IfscMasterRoutingModule } from './ifsc-master-routing.module';
import { AddIfscMasterComponent } from './add-ifsc-master/add-ifsc-master.component';


@NgModule({
  declarations: [
    AddIfscMasterComponent
  ],
  imports: [
    CommonModule,
    IfscMasterRoutingModule
  ]
})
export class IfscMasterModule { }

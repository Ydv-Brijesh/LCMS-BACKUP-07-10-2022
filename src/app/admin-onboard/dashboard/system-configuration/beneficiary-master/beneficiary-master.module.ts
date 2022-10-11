import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryMasterRoutingModule } from './beneficiary-master-routing.module';
import { BeneficiaryMasterComponent } from './beneficiary-master.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';


@NgModule({
  declarations: [
    BeneficiaryMasterComponent,
    AddBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    BeneficiaryMasterRoutingModule
  ]
})
export class BeneficiaryMasterModule { }

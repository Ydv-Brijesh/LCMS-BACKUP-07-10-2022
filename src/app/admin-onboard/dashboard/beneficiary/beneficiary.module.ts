import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryRoutingModule } from './beneficiary-routing.module';
import { BeneficiaryListViewComponent } from './beneficiary-list-view/beneficiary-list-view.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BeneficiaryListViewComponent,
    AddBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    BeneficiaryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BeneficiaryModule { }

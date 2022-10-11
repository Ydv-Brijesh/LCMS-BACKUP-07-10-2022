import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { BeneficiaryMasterComponent } from './beneficiary-master.component';

const routes: Routes = [
  { path: '', component: BeneficiaryMasterComponent },
  { path: 'add', component: AddBeneficiaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryMasterRoutingModule { }

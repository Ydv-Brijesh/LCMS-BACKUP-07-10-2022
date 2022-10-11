import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { BeneficiaryListViewComponent } from './beneficiary-list-view/beneficiary-list-view.component';

const routes: Routes = [
  {
    path: 'beneficiariesList',
    component:BeneficiaryListViewComponent
  },
  {
    path: 'addBeneficiaries',
    component:AddBeneficiaryComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBankComponent } from './add-bank/add-bank.component';
import { BanksComponent } from './banks.component';

const routes: Routes = [
  { path: '', component: BanksComponent },
  { path: 'add', component: AddBankComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanksRoutingModule { }

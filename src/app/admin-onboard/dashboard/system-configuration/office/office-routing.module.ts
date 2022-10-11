import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfficeComponent } from './add-office/add-office.component';
import { OfficeComponent } from './office.component';

const routes: Routes = [
  { path: '', component: OfficeComponent},
  { path: 'add', component: AddOfficeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIfscMasterComponent } from './add-ifsc-master/add-ifsc-master.component';
import { IfscMasterComponent } from './ifsc-master.component';

const routes: Routes = [
  { path: '', component: IfscMasterComponent },
  { path: 'add', component: AddIfscMasterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IfscMasterRoutingModule { }

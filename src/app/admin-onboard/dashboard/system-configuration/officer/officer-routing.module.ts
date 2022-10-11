import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOficerComponent } from './add-oficer/add-oficer.component';
import { OfficerComponent } from './officer.component';

const routes: Routes = [
  { path: '', component: OfficerComponent},
  { path: 'add', component: AddOficerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerRoutingModule { }

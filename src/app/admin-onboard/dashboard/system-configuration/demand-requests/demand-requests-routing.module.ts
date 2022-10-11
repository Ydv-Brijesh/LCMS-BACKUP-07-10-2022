import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDemandRequestsComponent } from './add-demand-requests/add-demand-requests.component';
import { DemandRequestsComponent } from './demand-requests.component';

const routes: Routes = [
  { path: '', component: DemandRequestsComponent },
  { path: 'add', component: AddDemandRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandRequestsRoutingModule { }

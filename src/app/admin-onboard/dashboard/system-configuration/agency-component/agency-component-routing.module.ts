import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { AgencyComponentComponent } from './agency-component.component';

const routes: Routes =[
  { path: '', component: AgencyComponentComponent },
  { path: 'add', component: AddAgencyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyComponentRoutingModule { }

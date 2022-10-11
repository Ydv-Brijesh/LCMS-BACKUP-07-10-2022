import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandRequestsRoutingModule } from './demand-requests-routing.module';
import { DemandRequestsComponent } from './demand-requests.component';

import { AddDemandRequestsComponent } from './add-demand-requests/add-demand-requests.component';


@NgModule({
  declarations: [
    DemandRequestsComponent,
    AddDemandRequestsComponent
  ],
  imports: [
    CommonModule,
    DemandRequestsRoutingModule
  ]
})
export class DemandRequestsModule { }

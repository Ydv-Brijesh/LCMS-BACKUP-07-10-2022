import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyComponentRoutingModule } from './agency-component-routing.module';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgencyComponentComponent } from './agency-component.component';


@NgModule({
  declarations: [AgencyComponentComponent,
    AddAgencyComponent
  ],
  imports: [
    CommonModule,
    AgencyComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgencyComponentModule { }

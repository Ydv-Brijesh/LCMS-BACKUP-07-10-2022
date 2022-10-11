import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { AddOfficeComponent } from './add-office/add-office.component';
import { OfficeComponent } from './office.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfficeComponent,
    AddOfficeComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OfficeModule { }

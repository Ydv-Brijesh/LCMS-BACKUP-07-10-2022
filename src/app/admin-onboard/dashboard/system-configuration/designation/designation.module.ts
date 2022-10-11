import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { DesignationComponent } from './designation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DesignationComponent,
    AddDesignationComponent,
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DesignationModule { }

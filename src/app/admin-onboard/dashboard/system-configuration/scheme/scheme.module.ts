import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeRoutingModule } from './scheme-routing.module';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeComponent } from './scheme.component';


@NgModule({
  declarations: [SchemeComponent,
    AddSchemeComponent
  ],
  imports: [
    CommonModule,
    SchemeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SchemeModule { }

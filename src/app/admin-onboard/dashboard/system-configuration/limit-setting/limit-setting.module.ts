import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimitSettingRoutingModule } from './limit-setting-routing.module';
import { AddLimitComponent } from './add-limit/add-limit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimitSettingComponent } from './limit-setting.component';


@NgModule({
  declarations: [LimitSettingComponent,
    AddLimitComponent
  ],
  imports: [
    CommonModule,
    LimitSettingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LimitSettingModule { }

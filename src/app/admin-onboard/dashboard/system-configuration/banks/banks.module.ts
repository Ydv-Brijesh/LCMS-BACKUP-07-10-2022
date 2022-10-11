import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { AddBankComponent } from './add-bank/add-bank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanksComponent } from './banks.component';


@NgModule({
  declarations: [BanksComponent,
    AddBankComponent
  ],
  imports: [
    CommonModule,
    BanksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BanksModule { }

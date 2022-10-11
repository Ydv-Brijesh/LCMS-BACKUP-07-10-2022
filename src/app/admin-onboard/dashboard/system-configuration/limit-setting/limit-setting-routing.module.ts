import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLimitComponent } from './add-limit/add-limit.component';
import { LimitSettingComponent } from './limit-setting.component';

const routes: Routes = [
  { path: '', component: LimitSettingComponent },
  { path: 'add', component: AddLimitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LimitSettingRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { SchemeComponent } from './scheme.component';

const routes: Routes = [
  { path: '', component: SchemeComponent },
  { path: 'add', component: AddSchemeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeRoutingModule { }

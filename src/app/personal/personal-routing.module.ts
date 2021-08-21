import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { Table2Component } from './table2/table2.component';


const routes: Routes = [
  {path:'laptop', component: LaptopComponent},
  {path:'', component: Table2Component},
  // {path: '', redirectTo:'/table2', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }

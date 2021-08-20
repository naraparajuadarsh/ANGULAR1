import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotherBoardComponent } from './mother-board/mother-board.component';


const routes: Routes = [
  {path:'', component: MotherBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Table1RoutingModule { }

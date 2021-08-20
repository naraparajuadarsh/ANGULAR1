import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Table1RoutingModule } from './table1-routing.module';
import { MotherBoardComponent } from './mother-board/mother-board.component';


@NgModule({
  declarations: [MotherBoardComponent],
  imports: [
    CommonModule,
    Table1RoutingModule
  ]
})
export class Table1Module { }

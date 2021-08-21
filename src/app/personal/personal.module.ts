import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { LaptopComponent } from './laptop/laptop.component';
import { Table2Component } from './table2/table2.component';


@NgModule({
  declarations: [LaptopComponent, Table2Component],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }

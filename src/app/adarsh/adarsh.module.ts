import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdarshRoutingModule } from './adarsh-routing.module';
import { FatherComponent } from './father/father.component';


@NgModule({
  declarations: [FatherComponent],
  imports: [
    CommonModule,
    AdarshRoutingModule
  ]
})
export class AdarshModule { }

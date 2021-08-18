import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchwizardModule } from 'ng2-archwizard';
import { MyArchwizarComponent } from './my-archwizar/my-archwizar.component';
import { MyPersonalDetailsComponent } from './my-personal-details/my-personal-details.component';
import { MyEducationDetailsComponent } from './my-education-details/my-education-details.component';
import { MyReviewDetailsComponent } from './my-review-details/my-review-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyArchwizarComponent,
    MyPersonalDetailsComponent,
    MyEducationDetailsComponent,
    MyReviewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

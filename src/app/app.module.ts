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
import { MyDemoTableComponent } from './my-demo-table/my-demo-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneComponent } from './phone/phone.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    MyArchwizarComponent,
    MyPersonalDetailsComponent,
    MyEducationDetailsComponent,
    MyReviewDetailsComponent,
    MyDemoTableComponent,
    PhoneComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

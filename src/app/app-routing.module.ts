import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyArchwizarComponent } from './my-archwizar/my-archwizar.component';
import { MyCanActivateGuardService } from './my-can-activate-guard.service';
import { MyCanDeactiveGuardService } from './my-can-deactive-guard.service';
import { MyEducationDetailsComponent } from './my-education-details/my-education-details.component';
import { MyPersonalDetailsComponent } from './my-personal-details/my-personal-details.component';
import { MyReviewDetailsComponent } from './my-review-details/my-review-details.component';


const routes: Routes = [
  {path:"Home",component:MyArchwizarComponent,canActivate:[MyCanActivateGuardService]},
  {path:"personal",component:MyPersonalDetailsComponent,canDeactivate:[MyCanDeactiveGuardService]},
  {path:"education",component:MyEducationDetailsComponent,canDeactivate:[MyCanDeactiveGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

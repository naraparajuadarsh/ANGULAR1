import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyArchwizarComponent } from './my-archwizar/my-archwizar.component';
import { MyCanActivateGuardService } from './my-can-activate-guard.service';
import { MyCanDeactiveGuardService } from './my-can-deactive-guard.service';
import { MyDemoTableServiceService } from './my-demo-table-service.service';
import { MyDemoTableComponent } from './my-demo-table/my-demo-table.component';
import { MyEducationDetailsComponent } from './my-education-details/my-education-details.component';
import { MyPersonalDetailsComponent } from './my-personal-details/my-personal-details.component';
import { MyResolveGuardService } from './my-resolve-guard.service';
import { MyReviewDetailsComponent } from './my-review-details/my-review-details.component';


const routes: Routes = [
  {path:"Home",component:MyArchwizarComponent,canActivate:[MyCanActivateGuardService]},
  {path:"personal",component:MyPersonalDetailsComponent,canDeactivate:[MyCanDeactiveGuardService]},
  {path:"education",component:MyEducationDetailsComponent,canDeactivate:[MyCanDeactiveGuardService]},
  {path:"demotable",component:MyDemoTableComponent,
  resolve:{employees:MyResolveGuardService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

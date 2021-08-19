import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MyDemoTableServiceService } from './my-demo-table-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyResolveGuardService implements Resolve<any>{

  constructor(private myservice:MyDemoTableServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.myservice.getdemotable();
    
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCanDeactiveGuardService implements CanDeactivate<any> {

  constructor() { }
  canDeactivate(): boolean{

    return confirm('Are you sure you want to dicard your changes?');

  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFinalprojectService {
  objects:any=[]

  constructor() { }

  form(value:any):Observable<any>{
    console.log(value)
    this.objects.push(value)
    return of(true)
  }
}

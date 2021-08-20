import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyDemoTableServiceService {
  objects:any=[]
  constructor(private httpClient:HttpClient ) { }

 getdemotable():Observable<any>{
   
    return this.httpClient.get("https://reqres.in/api/unknown").pipe(
      delay(3000)
    );

  }
}

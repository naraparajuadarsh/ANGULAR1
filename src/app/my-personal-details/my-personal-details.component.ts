import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyFinalprojectService } from '../my-finalproject.service';

@Component({
  selector: 'app-my-personal-details',
  templateUrl: './my-personal-details.component.html',
  styleUrls: ['./my-personal-details.component.css']
})
export class MyPersonalDetailsComponent implements OnInit {
  mypersonal:FormGroup;
  @Output() personDetails:EventEmitter<any>=new EventEmitter();
  object:any=[];

  constructor(private myservice:MyFinalprojectService) { 
    this.mypersonal=new FormGroup({
      name:new FormControl(null,Validators.required),
      phone:new FormControl(),
      age:new FormControl()
    })
    this.mypersonal.valueChanges.subscribe(value=>{
      this.personDetails.emit(this.mypersonal)
    })
  }

  // Continue(){
  //   // console.log(this.mypersonal)
  //   this.personDetails.emit(this.mypersonal)
  //   // this.myservice.form(this.mypersonal.value).subscribe(Value=>{
  //   //   alert("sucess")
  //   // },
  //   // error=>{
  //   //   alert("fail")
  //   // }) 
  // }

  ngOnInit() {
  }

}

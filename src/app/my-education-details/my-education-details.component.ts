import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyFinalprojectService } from '../my-finalproject.service';

@Component({
  selector: 'app-my-education-details',
  templateUrl: './my-education-details.component.html',
  styleUrls: ['./my-education-details.component.css']
})
export class MyEducationDetailsComponent implements OnInit {
  myfather:FormGroup;
  @Output() educationDetails:EventEmitter<any>=new EventEmitter();
  // object:any=[];
  constructor(private myservice:MyFinalprojectService) {
    this.myfather=new FormGroup({
      tenth:new FormControl(null,Validators.required),
      inter:new FormControl(),
      degree:new FormControl()
    })
    this.myfather.valueChanges.subscribe(value=>{
      this.educationDetails.emit(this.myfather)
    })
   }

  //  Continue(){
  //   // console.log(this.myfather)
  //   this.educationDetails.emit(this.myfather.value)
  //   // this.myservice.form(this.myfather.value).subscribe(Value=>{
  //   //   alert("sucess")
  //   // },
  //   // error=>{
  //   //   alert("fail")
  //   // }) 
  // }


  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-archwizar',
  templateUrl: './my-archwizar.component.html',
  styleUrls: ['./my-archwizar.component.css']
})
export class MyArchwizarComponent implements OnInit {
  personalDetails:any=null;
  educatDetails:any=null;
  personalDetailsForm:FormGroup;
  educationDetailsForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }
  personDetails(value:any){
    this.personalDetails=value.value;
    this.personalDetailsForm=value;
  }
  educationDetails(value:any){
    this.educatDetails=value.value;
    this.educationDetailsForm=value;
  }

}

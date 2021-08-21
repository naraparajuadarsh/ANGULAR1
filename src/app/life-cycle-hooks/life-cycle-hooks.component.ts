import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, OnDestroy,OnChanges,AfterContentChecked,DoCheck,AfterContentInit,AfterViewInit,AfterViewChecked {
    object:any="Adarsh";
  constructor() {
    console.log("life-cycle-hooks constructor is called")
   }

   ngOnChanges() {
    console.log("life-cycle-hooks OnChanges is called");
  }

  ngOnInit() {
    console.log("life-cycle-hooks OnInit is called");
  }

  ngDoCheck() {
    console.log("life-cycle-hooks DoCheck is called");
  }

  ngAfterContentInit() {
    console.log("life-cycle-hooks AfterContentInit is called");
  }

  ngAfterContentChecked() {
    console.log('life-cycle-hooks AfterContentChecked is called');
  }

  ngAfterViewInit() {
    console.log('life-cycle-hooks AfterViewInit is called');
  }

  ngAfterViewChecked() {
    console.log('life-cycle-hooks AfterViewChecked is called');
  }

  ngOnDestroy() {
    console.log("life-cycle-hooks OnDestroy is called");
  }
 
}


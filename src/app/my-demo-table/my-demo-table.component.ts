import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDemoTableServiceService } from '../my-demo-table-service.service';

@Component({
  selector: 'app-my-demo-table',
  templateUrl: './my-demo-table.component.html',
  styleUrls: ['./my-demo-table.component.css']
})
export class MyDemoTableComponent implements OnInit {
  objects:any=[]
  constructor(private myservice:MyDemoTableServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.objects = this.route.snapshot.data['employees'].data
    // console.log()
    // this.myservice.getdemotable().subscribe(value=>{
    //   this.objects=value.data;
    //   console.log(value.data)
    // })
  }

}

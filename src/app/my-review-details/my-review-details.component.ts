import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-review-details',
  templateUrl: './my-review-details.component.html',
  styleUrls: ['./my-review-details.component.css']
})
export class MyReviewDetailsComponent implements OnInit {
  @Input() personalDetails:any;
  @Input() educatDetails:any;
  constructor() { }

  ngOnInit() {
  }

}

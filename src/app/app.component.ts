import { Component, EventEmitter } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private router:Router) {
    this.router.events.subscribe((RouterEvent:Event)=>{
      if (RouterEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      if (RouterEvent instanceof NavigationEnd ||
        RouterEvent instanceof NavigationError ||
        RouterEvent instanceof NavigationCancel) {
          this.showLoadingIndicator = false;
        }
    })
  }
}

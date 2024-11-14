import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homecare';
  isHeader:any='';
  isSidebar:any='';

  constructor(public _route: Router,){
    this._route.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.data && Object.keys(event.snapshot.data).length > 0) {
          if (event.snapshot.data['isHeader'] >= 0) {
            this.isHeader = event.snapshot.data['isHeader'];
            console.log('this.isHeader', this.isHeader)
          }
          if (event.snapshot.data['isSidebar'] >= 0) {
            this.isSidebar = event.snapshot.data['isSidebar'];
            console.log('this.isSidebar', this.isSidebar)
          }
        }
      }
    });
  }
}

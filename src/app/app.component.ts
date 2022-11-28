import { Component } from '@angular/core';
import { GitwebService } from "./service/gitweb.service"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  service: any;
  mapArray: any;
  totalrecords: number | undefined;
  constructor() { 

  }
  ngOninit(){
  
  }
}

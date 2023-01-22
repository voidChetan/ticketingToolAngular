import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  loggedUserData: any;
  constructor() {
    const localData =  localStorage.getItem('reqObj');
    if(localData!= null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  ngOnInit(): void {
  }

}

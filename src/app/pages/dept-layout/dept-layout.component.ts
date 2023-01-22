import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept-layout',
  templateUrl: './dept-layout.component.html',
  styleUrls: ['./dept-layout.component.css']
})
export class DeptLayoutComponent implements OnInit {

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

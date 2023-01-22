import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-layout',
  templateUrl: './emp-layout.component.html',
  styleUrls: ['./emp-layout.component.css']
})
export class EmpLayoutComponent implements OnInit {

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

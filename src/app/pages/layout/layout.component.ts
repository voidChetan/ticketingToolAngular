import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  loggedUserData: any;
  role: string = '';
  constructor(private master: MasterService) {
    const localData =  localStorage.getItem('reqObj');
    if(localData!= null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  ngOnInit(): void {
  }
  onROleChange() {
    this.master.emitSubject(this.role);
  }

}

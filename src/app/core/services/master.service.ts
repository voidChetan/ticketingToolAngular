import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  data: any= {
    name:'Demo',
    branch: 'IT'
  };
  roleChange = new Subject();  //create subjcet
  constructor(private http: HttpClient) { }
  emitSubject(str: string) { //subject emit using next
    debugger;
    this.roleChange.next(str);
  }
  getSubject() { // return sibject as observable so that we can subscribe
   return this.roleChange.asObservable();
  }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>("https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments");
  }

  generateFullName(fName: string,mName: string,lName: string) {
    return fName+ ' '+ mName + ' '+ lName;
  }
}

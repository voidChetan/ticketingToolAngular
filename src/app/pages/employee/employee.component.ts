import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departmentList: any [] = [];
  employeeList: any [] = [];
  gridList: any[]= [];
  employeeObj = {
    "EmployeeName": "",
    "ContactNo": "",
    "EmailId": "",
    "Role": "",
    "UserName": "",
    "Password": "",
    "DeptId": 0,
    "ReportsTo": 0
  }
  imgList = [
    'https://media.gettyimages.com/id/518022060/photo/cricket-batsman-hitting-ball-during-cricket-match-in-stadium.jpg?s=612x612&w=gi&k=20&c=Fck6sAc7vz1Q6vsa37lNhBelRjd8yHanT4OcmyDae0Q=',
    'https://i.pinimg.com/originals/cc/0c/b3/cc0cb389b89c825c85c273d12a8a6fcd.jpg',
    'https://wallpaper.dog/large/20465726.jpg'
  ]
  constructor(private http:HttpClient,  private master: MasterService) {
    const data = this.master.data.name;
    this.master.data.city = "asdasd";
    const fullName = this.master.generateFullName('Shankar', 'B', 'BNokde');
    debugger;
    this.master.getSubject().subscribe(res=>{
      debugger;
    })
  }

  onBtnClick() {
    debugger;
  }
  ngOnInit(): void {
    this.getllEmployee();
    this.getDepartments();
  }

getllEmployee() {
  this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployees").subscribe((res:any)=>{
    this.gridList = res;
  })
}

  getDepartments() {
   this.master.getDepartments().subscribe((res:any)=>{
      this.departmentList = res;
    })
  }
  getEmployeeByDept() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployeeByDeptId?id="+ this.employeeObj.DeptId).subscribe((res:any)=>{
      this.employeeList = res;
    })
  }

  onSaveEmployee() {
    this.http.post('https://akbarapi.funplanetresort.in/api/MyRequest/CreateEmployee',this.employeeObj).subscribe((res:any)=>{
       debugger;
    })
  }

}

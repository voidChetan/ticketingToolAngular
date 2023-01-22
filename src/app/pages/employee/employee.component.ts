import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http:HttpClient) { }

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
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments").subscribe((res:any)=>{
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

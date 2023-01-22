import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  ticketObj = {
    "RequestId": 0,
    "RequestNo": "",
    "EmployeeId": 0,
    "CreatedDate": "",
    "ExpectedEndDate": "",
    "Severity": "",
    "DeptId": 0,
    "CompletedDate": "",
    "AssignedTo": 0,
    "State": "",
    "RequestDetails": ""
  };
  loggedUserData: any;
  departmentList: any [] = [];
  gridList: any[]= [];
  isOpenTicket: boolean = false;
  isAssignTicket: boolean = false;
  currentTicketDeptId: number = 0;
  EmpBydepartmentList: any [] = [];
  assignObj = {
    "RequestId": 0,
    "AssignedTo": 0
  };
  constructor(private http:HttpClient) {
    const localData =  localStorage.getItem('reqObj');
    if(localData!= null) {
      this.loggedUserData = JSON.parse(localData);
      this.ticketObj.EmployeeId =  this.loggedUserData.EmployeeId;
    }

  }

  ngOnInit(): void {
    this.getDepartments();
    if(this.loggedUserData.Role =='admin') {
      this.getAllTickets();

    } else if(this.loggedUserData.Role =='Employee') {
      this.getTicketsByLoggeedEmployee();
      this.isOpenTicket = true;
    } else if(this.loggedUserData.Role =='AdminDept') {
      this.getAssignedTicketBYEmpId();
    }

  }

  getAssignedTicketBYEmpId() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAssignedRequestByUserId?userid="+ this.loggedUserData.EmployeeId).subscribe((res:any)=>{
      this.gridList = res;
    })
  }
  getTicketsByLoggeedEmployee() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequestByEmployee?id="+ this.loggedUserData.EmployeeId).subscribe((res:any)=>{
      this.gridList = res;
    })
  }

  getAllTickets() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetAllRequest").subscribe((res:any)=>{
      this.gridList = res;
    })
  }
  getDepartments() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetDepartments").subscribe((res:any)=>{
      this.departmentList = res;
    })
  }
  getEmployeeByDept() {
    this.http.get("https://akbarapi.funplanetresort.in/api/MyRequest/GetEmployeeByDeptId?id="+ this.currentTicketDeptId).subscribe((res:any)=>{
      this.EmpBydepartmentList = res;
    })
  }
  onCreateTicket() {
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/CreateRequestMaster", this.ticketObj).subscribe((res:any)=>{
      this.getTicketsByLoggeedEmployee();
    })
  }

  onAssignEmp() {
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/AssignRequest", this.assignObj).subscribe((res:any)=>{
      this.getAllTickets();
    })
  }
  startRequest(id: number) {
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/startRequest?id="+id, {}).subscribe((res:any)=>{
      this.getAssignedTicketBYEmpId();
    })
  }
  closeRequest(id: number) {
    this.http.post("https://akbarapi.funplanetresort.in/api/MyRequest/closeRequest?id="+id, {}).subscribe((res:any)=>{
      this.getAssignedTicketBYEmpId();
    })
  }

  assign(reqId: number, deptId: number) {
    this.isAssignTicket = true;
    this.assignObj.RequestId = reqId;
    this.currentTicketDeptId =  deptId;
    this.getEmployeeByDept();
  }
}

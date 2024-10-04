import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { DepartmentComponent } from './pages/department/department.component';
import { DeptLayoutComponent } from './pages/dept-layout/dept-layout.component';
import { EmpLayoutComponent } from './pages/emp-layout/emp-layout.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LeavesComponent } from './pages/leaves/leaves.component';
import { LoginComponent } from './pages/login/login.component';
import { TicketsComponent } from './pages/tickets/tickets.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'tickets',
        component:TicketsComponent
      },
      {
        path:'Employee',
        component:EmployeeComponent
      },
      {
        path:'department',
        component:DepartmentComponent
      },
      {
        path:'Leaves',
        component:LeavesComponent
      },
    ]
  },
  {
    path:'',
    component:EmpLayoutComponent,
    children:[
      {
        path:'EmpTickets',
        component:TicketsComponent
      },
      {
        path:'EmpLeaves',
        component:LeavesComponent
      }
    ]
  },
  {
    path:'',
    component:DeptLayoutComponent,
    children:[
      {
        path:'DeptTickets',
        component:TicketsComponent
      },
      {
        path:'DeptLeaves',
        component:LeavesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

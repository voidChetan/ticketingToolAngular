import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LeavesComponent } from './pages/leaves/leaves.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { DepartmentComponent } from './pages/department/department.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { EmpLayoutComponent } from './pages/emp-layout/emp-layout.component';
import { DeptLayoutComponent } from './pages/dept-layout/dept-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LeavesComponent,
    TicketsComponent,
    DepartmentComponent,
    LayoutComponent,
    LoginComponent,
    EmpLayoutComponent,
    DeptLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

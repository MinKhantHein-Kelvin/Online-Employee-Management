import { DepartmentComponent } from './dashboard/department/department.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  { path : '' , component : HomeComponent,
    children:[
      {
        path : 'dashboard' , component : DashboardComponent, canActivate : [AdminGuard]
      },
      {
        path : 'employees' , component : EmployeeComponent, canActivate : [AdminGuard]
      },
      {
        path : 'departments' , component : DepartmentComponent, canActivate : [AdminGuard]
      }
    ],canActivate : [AdminGuard]
  },
  {path : 'login' , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

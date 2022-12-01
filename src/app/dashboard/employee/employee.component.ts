import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  employees : any[] = [];

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(data=>{
      this.employees = data;
    })
  }

}

import { DepartmentService } from './../services/department.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['deptname', 'order', 'action'];
  dataSource : MatTableDataSource<any> = new MatTableDataSource<any[]>([]);

  constructor(private deptService : DepartmentService) { }

  ngOnInit(): void {
    this.fillGrid();
  }

  fillGrid(){
    this.deptService.getAllDepartment().subscribe((data:any)=>{
      // console.log(data);
      this.dataSource = data;
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string = "../../assets/data/employees.json"
  constructor(private http : HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}

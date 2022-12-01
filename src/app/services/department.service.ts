import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl : string = "../../assets/data/departments.json"

  constructor(private http : HttpClient) {
   }

  getAllDepartment():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}

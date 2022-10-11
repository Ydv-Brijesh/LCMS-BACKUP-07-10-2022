import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpRequest} from '@angular/common/http';
import { Router } from '@angular/router';
import { base_url } from '../global';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient, private router: Router) { }
  departmentReport(data: any) {
    let api_url = base_url + 'department-report';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

}

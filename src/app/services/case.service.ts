import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpRequest} from '@angular/common/http';
import { Router } from '@angular/router';
import { base_url } from '../global';
import { base_url_file } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient, private router: Router) { }
  
  saveCase(data: any) {
    let api_url = base_url + 'add-case';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  GetCaseData() {
    let api_url = base_url + 'get-case';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  GetCaseSingle(id: any) {
    let api_url = base_url + 'edit-case/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCase(data: any, id: any) {
    let api_url = base_url + 'update-case/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  uploadFile(data: File) {
    // let api_file_url = base_url_file + 'upload';
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'content-type': 'application/json;charset=UTF-8',
    //     // 'apikey': this.api_key
    //   }),
    // };
    // return this.http.post(api_file_url, data);

    // upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('file', data);
      const request = new HttpRequest(
        'POST',
        base_url_file + 'upload/upload',
        formData,
        {
          reportProgress: false,
          responseType: 'text',
        }
      );
  
      return this.http.request(request);
    }
    importCase(data:any){
      let api_url = base_url + 'addCaseImport' ;
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json;charset=UTF-8',
          // 'apikey': this.api_key
        }),
      };
      return this.http.post(api_url, data, httpOptions);
    }

    deleteCase(id: any) {
      let api_url = base_url + 'delete-case/' + id;
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json;charset=UTF-8',
        }),
      };
      return this.http.get(api_url, httpOptions);
    }








    saveCaseDetails(data: any) {
      let api_url = base_url + 'add-caseDetails';
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json;charset=UTF-8',
        }),
      };
      return this.http.post(api_url, data, httpOptions);
    }


    editCaseDetails(id: any) {
      let api_url = base_url + 'edit-CaseDetails/' + id;
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json;charset=UTF-8',
        }),
      };
      return this.http.get(api_url, httpOptions);
    }
  
    updateCaseDetails(data: any, id: any) {
      let api_url = base_url + 'update-CaseDetails/' + id;
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json;charset=UTF-8',
          // 'apikey': this.api_key
        }),
      };
      return this.http.post(api_url, data, httpOptions);
    }
  }


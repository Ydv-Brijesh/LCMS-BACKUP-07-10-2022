import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { base_url } from '../global';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  loginUser(data: any) {
    let api_url = base_url + '/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  VerifyEmail(data: any) {
    let api_url = base_url + '/verify-otp';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        // 'apikey': this.api_key,
        'Referrer-Policy': 'no-referrer',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  CheckEmail(email: any) {
    let api_url = base_url + '/checkemail';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, email, httpOptions);
  }

  SendEmail(email: any) {
    let api_url = base_url + '/sendmail';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, email, httpOptions);
  }
  

  ChangePassword(data: any, id: any) {
    let api_url = base_url + '/change-password/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  resetPassword(data: any) {
    let api_url = base_url + '/reset-password';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  resetPasswordSave(data: any, id: any) {
    let api_url = base_url + '/reset-password-save/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }




  saveUser(data: any) {
    let api_url = base_url + 'add-user';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getUser() {
    let api_url = base_url + 'get-user';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  deleteUser(id: any) {
    let api_url = base_url + 'delete-user/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  editUser(id: any) {
    let api_url = base_url + 'edit-user/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateUser(data: any, id: any) {
    let api_url = base_url + 'update-user/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

}

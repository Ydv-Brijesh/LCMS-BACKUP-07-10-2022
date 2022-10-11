import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpRequest} from '@angular/common/http';
import { Router } from '@angular/router';
import { base_url } from '../global';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }


}

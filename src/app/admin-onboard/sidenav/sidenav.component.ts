import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  username: any;
  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    localStorage.removeItem('userdata');
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.username= localStorage.getItem('username')?localStorage.getItem('username'):this.router.navigate(['/'])
  }

}

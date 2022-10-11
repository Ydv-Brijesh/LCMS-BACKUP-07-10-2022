import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Officer } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  officer: any
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.officer = this.data.getofficer()
    console.log(this.officer);
    this.data.officerChange.subscribe((officer: Officer[]) => {
      this.officer = officer
      console.log(officer);

    })   
  }
  addofficer() {
    this.router.navigate(['/dashboard/system-configuration/officer/add'])
  }
}
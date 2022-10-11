import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-agency-component',
  templateUrl: './agency-component.component.html',
  styleUrls: ['./agency-component.component.css']
})
export class AgencyComponentComponent implements OnInit {
  agency!: Agency[];
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.agency = this.data.getAgency()
    this.data.agencyChange.subscribe((agency: Agency[]) => {
      this.agency = agency
    })   
  }
  addNewAgency() {
    this.router.navigate(['/dashboard/system-configuration/agencyComponent/add'])
  }
}
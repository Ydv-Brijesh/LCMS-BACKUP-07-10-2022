import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designation: any
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.designation = this.data.getdesignation()
    console.log(this.designation);
    this.data.designationChange.subscribe((designation: Designation[]) => {
      this.designation = designation
      console.log(designation);

    })   
  }
  adddesignation() {
    this.router.navigate(['/dashboard/system-configuration/designation/add'])
  }


}

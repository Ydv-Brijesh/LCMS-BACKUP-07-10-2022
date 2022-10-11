import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {


  getData: any;

  constructor(
    private MasterS: MasterService,
    private toast: ToasterService,
  ) { }

  ngOnInit(): void {
    this.viewdata();
  }

  viewdata(){
    this.MasterS.GetDeptdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getData = data.resultData;
    });
  }
}

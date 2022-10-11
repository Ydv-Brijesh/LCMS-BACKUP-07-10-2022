import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-case-status-list',
  templateUrl: './case-status-list.component.html',
  styleUrls: ['./case-status-list.component.css']
})
export class CaseStatusListComponent implements OnInit {

  getData: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private MasterS: MasterService,
    private toast: ToasterService,
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      searching: true,
      processing: true,
      dom: 'lfrtip',
    };
    this.viewdata();
  }

  viewdata(){
    this.MasterS.GetStatusdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getData = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteCaseStatus(id).subscribe(
      (data: any)=> {this.MasterS.GetStatusdata()
        console.log(data);
        window.location.href = '/case-status-list';
      },

    );
  }
}

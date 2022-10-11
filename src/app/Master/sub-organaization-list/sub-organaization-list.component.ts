import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sub-organaization-list',
  templateUrl: './sub-organaization-list.component.html',
  styleUrls: ['./sub-organaization-list.component.css']
})
export class SubOrganaizationListComponent implements OnInit {
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
    this.MasterS.GetSubOrgdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getData = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteSubOrg(id).subscribe(
      (data: any)=> {this.MasterS.GetSubOrgdata()
        console.log(data);
        window.location.href = '/sub-org-list';
      },

    );
  }
}

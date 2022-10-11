import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-orgnaisation-list',
  templateUrl: './orgnaisation-list.component.html',
  styleUrls: ['./orgnaisation-list.component.css']
})
export class OrgnaisationListComponent implements OnInit {

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
    this.MasterS.GetOrgdata().subscribe((data: any) => {
      console.log(data);
      this.getData = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteOrg(id).subscribe(
      (data: any)=> {this.MasterS.GetOrgdata()
        console.log(data);
        // this.toast.showSuccess(
        //   'Congratulation!, Data has been deleted.'
        // );
        window.location.href = '/orgnaisation-list';
      },

    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-respondent-list',
  templateUrl: './respondent-list.component.html',
  styleUrls: ['./respondent-list.component.css']
})
export class RespondentListComponent implements OnInit {
  getDataRes: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private toast: ToasterService,
    private MasterS: MasterService,
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
    this.respondentData();
  }
  respondentData(){
    this.MasterS.GetRespondentdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataRes = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteRespondent(id).subscribe(
      (data: any)=> {this.MasterS.GetRespondentdata()
        console.log(data);
        // this.toast.showSuccess(
        //   'Congratulation!, Data has been deleted.'
        // );
        window.location.href = '/respondent-list';
      },

    );
  }
}

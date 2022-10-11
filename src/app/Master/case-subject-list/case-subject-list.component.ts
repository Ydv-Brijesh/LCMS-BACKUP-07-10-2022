import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-case-subject-list',
  templateUrl: './case-subject-list.component.html',
  styleUrls: ['./case-subject-list.component.css']
})
export class CaseSubjectListComponent implements OnInit {

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
    this.viewdataCaseSub();
  }

  viewdataCaseSub(){
    this.MasterS.GetCaseSubject().subscribe((data: any) => {
      console.log(data.resultData);
      this.getData = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteCaseSubject(id).subscribe(
      (data: any)=> {this.MasterS.GetCaseSubject()
        console.log(data);
        window.location.href = '/case-subject-list';
      },

    );
  }

}

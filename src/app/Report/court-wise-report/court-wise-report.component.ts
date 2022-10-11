import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-court-wise-report',
  templateUrl: './court-wise-report.component.html',
  styleUrls: ['./court-wise-report.component.css']
})
export class CourtWiseReportComponent implements OnInit   {
  getData: any;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild('noteModal') noteModal: any;
  year: any = [];

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  getDataCourt: any;
  constructor(
    private CaseS: CaseService,
    private MasterS: MasterService,
  ) { }

  ngOnInit(): void {
  
    this.CourtData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 10,
      ordering: false,
      searching: true,
      processing: true,
      // dom: 'lfrtip', 
      dom: 'Blfrtip',
      "info": true,
      "lengthMenu": [[10, 100, 500, -1], [10, 100, 500, "All"]],
    };
    this.CaseS.GetCaseData().subscribe((data: any) => {
      console.log(data);
      this.getData = data.resultData;
      this.dtTrigger.next();
    });
  }

  getDataDepartment(d:any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if(d.target.value!=''){
        dtInstance.column(1)
                .search('^' + d.target.value + '$', true, false, true)
                .draw();
      }
      else{
        window.location.reload()
              }
            });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    $.fn.dataTable.ext.search.pop();
  }


  


  CourtData() {
    this.MasterS.GetCourtdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataCourt = data.resultData;
    });
  }
  viewdata() {
    this.CaseS.GetCaseData().subscribe((data: any) => {
      console.log(data.resultData);
      this.getData = data.resultData;

    });
  }


  refresh(): void {
    window.location.reload();
}


}

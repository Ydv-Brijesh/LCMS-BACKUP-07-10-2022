import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { CaseService } from 'src/app/services/case.service';
import { MasterService } from 'src/app/services/master.service';
import { ReportService } from 'src/app/services/report.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';

import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-department-wise-report',
  templateUrl: './department-wise-report.component.html',
  styleUrls: ['./department-wise-report.component.css']
})
export class DepartmentWiseReportComponent implements OnInit {
  getData: any;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild('noteModal') noteModal: any;
  year: any = [];
  getDataO: any;
  saveForm: any;
  isValidFormSubmitted!: boolean;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  constructor(
    private toast: ToasterService,
    private CaseS: CaseService,
    private MasterS: MasterService,
    private ReportS: ReportService,
    private _Activatedroute: ActivatedRoute,
    private fb: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    var dateToday = new Date();
    var i;
    for (i = 0; i < 51; i++) {
      var y = (dateToday.getFullYear() - i);
      this.year.push(y)


    }
    this.orgData();
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

  getDataYear(d:any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if(d.target.value!=''){
        dtInstance
          .column(2)
          .search('^' + d.target.value + '$', true, false, true)
          .draw();
      
      }
      else{
        window.location.reload()
      }
        
    });
  }
  


  orgData() {
    this.MasterS.GetOrgdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataO = data.resultData;
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

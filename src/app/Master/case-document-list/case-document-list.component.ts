import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-case-document-list',
  templateUrl: './case-document-list.component.html',
  styleUrls: ['./case-document-list.component.css']
})
export class CaseDocumentListComponent implements OnInit {
  getDataDocument: any;
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
    this.documentData();
  }

  documentData(){
    this.MasterS.getCaseDocument().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDocument = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteCaseDocument(id).subscribe(
      (data: any)=> {this.MasterS.getCaseDocument()
        console.log(data);
        window.location.href = '/case-document-list';
      },

    );
  }
}

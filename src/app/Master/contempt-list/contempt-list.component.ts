import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contempt-list',
  templateUrl: './contempt-list.component.html',
  styleUrls: ['./contempt-list.component.css']
})
export class ContemptListComponent implements OnInit {
  getDataContempt: any;
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
    this.contemptData();
  }

  contemptData(){
    this.MasterS.GetContemptdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataContempt = data.resultData;
      this.dtTrigger.next();
    });
  }
}

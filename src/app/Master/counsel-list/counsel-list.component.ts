import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-counsel-list',
  templateUrl: './counsel-list.component.html',
  styleUrls: ['./counsel-list.component.css']
})
export class CounselListComponent implements OnInit {
  getDataCounsel: any;
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
    this.counselData();
  }
  counselData(){
    this.MasterS.GetCounseldata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataCounsel = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteCouncel(id).subscribe(
      (data: any)=> {this.MasterS.GetCounseldata()
        console.log(data);
        window.location.href = '/counsel-list';
      },

    );
  }
}

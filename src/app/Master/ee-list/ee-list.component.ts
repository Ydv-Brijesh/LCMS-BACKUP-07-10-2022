import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-ee-list',
  templateUrl: './ee-list.component.html',
  styleUrls: ['./ee-list.component.css']
})
export class EEListComponent implements OnInit {

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
    this.viewdataEE();
  }

  viewdataEE(){
    this.MasterS.GetEEdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getData = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteEE(id).subscribe(
      (data: any)=> {this.MasterS.GetEEdata()
        console.log(data);
        // this.toast.showSuccess(
        //   'Congratulation!, Data has been deleted.'
        // );
        window.location.href = '/ee-list';
      },

    );
  }
}

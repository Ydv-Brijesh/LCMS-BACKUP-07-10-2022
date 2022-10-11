import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-case-task-list',
  templateUrl: './case-task-list.component.html',
  styleUrls: ['./case-task-list.component.css']
})
export class CaseTaskListComponent implements OnInit {
  getDataTask: any;
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
    this.taskData();
  }

  taskData(){
    this.MasterS.getCaseTaskData().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataTask = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deleteCaseTask(id).subscribe(
      (data: any)=> {this.MasterS.getCaseTaskData()
        console.log(data);
        window.location.href = '/case-task-list';
      },

    );
  }
}

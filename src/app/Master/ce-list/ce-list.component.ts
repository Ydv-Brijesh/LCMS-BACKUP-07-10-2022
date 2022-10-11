import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-ce-list',
  templateUrl: './ce-list.component.html',
  styleUrls: ['./ce-list.component.css']
})
export class CEListComponent implements OnInit {


  getData: any;

  constructor(
    private MasterS: MasterService,
    private toast: ToasterService,
  ) { }

  ngOnInit(): void {
    this.viewdata();
  }

  viewdata(){
    this.MasterS.GetCEdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getData = data.resultData;
    });
  }

}

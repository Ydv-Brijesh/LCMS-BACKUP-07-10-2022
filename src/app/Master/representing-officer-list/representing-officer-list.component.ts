import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-representing-officer-list',
  templateUrl: './representing-officer-list.component.html',
  styleUrls: ['./representing-officer-list.component.css']
})
export class RepresentingOfficerListComponent implements OnInit {
  getDataRepresenting: any;

  constructor(
    private toast: ToasterService,
    private MasterS: MasterService,
  ) { }

  ngOnInit(): void {
    this.representingData();
  }
  representingData(){
    this.MasterS.GetRepresentingdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataRepresenting = data.resultData;
    });
  }
}

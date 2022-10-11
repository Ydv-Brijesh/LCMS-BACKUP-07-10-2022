import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-petitioner-list',
  templateUrl: './petitioner-list.component.html',
  styleUrls: ['./petitioner-list.component.css']
})
export class PetitionerListComponent implements OnInit {
  getDataPet: any;
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
    this. petitionerData();
  }
  petitionerData(){
    this.MasterS.GetPetitionerdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataPet = data.resultData;
      this.dtTrigger.next();
    });
  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.MasterS.deletePetitioner(id).subscribe(
      (data: any)=> {this.MasterS.GetPetitionerdata()
        console.log(data);
        window.location.href = '/petitioner-list';
      },

    );
  }
}

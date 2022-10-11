import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { CaseService } from 'src/app/services/case.service';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
// addCaseImport
@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  getData: any;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild('noteModal') noteModal: any;
  @ViewChild('hearingModal') hearingModal: any;
  id: any;
  EditData: any;
  saveForm: any;
  isValidFormSubmittedCont!: boolean;
  ids: any;
  largeModal: any;
  petiById: any=[];
  j:any
  datapetitioner: any

  constructor(
    private toast: ToasterService,
    private CaseS: CaseService,
    private _Activatedroute: ActivatedRoute,
    private fb: UntypedFormBuilder,
    private MasterS: MasterService,
  ) { }

  ngOnInit(): void {
    this.ids = this._Activatedroute.snapshot.paramMap.get('id');
    this.CaseS
    .GetCaseSingle(this.ids)
    .subscribe((data: any) => {
      this.EditData=data.updateData;

      // console.log(this.EditData,"CASE ID SINGLE");
      this.onforminit(this.EditData)
    }) 
    
  
 
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      searching: true,
      processing: true,
      dom: 'lfrtip',
    };
    this.CaseS.GetCaseData().subscribe((data: any) => {
    
      this.getData = data.resultData;
      this.dtTrigger.next();

      console.log(this.getData[0].petitionerCollection,"petitioner iddddddddddddddd");
      
      // this.petiById=[]
      // let petitionerData= this.getData
     //  console.log(petitionerData.case_petitioner_id);
      
      // for(let i of petitionerData){
      //  //  console.log(i.case_petitioner_id,"idddddddddddddddddddddddddddddddd");
      //   this.j = i.case_petitioner_id
      //   for(let k of this.j){
      //    // console.log(k,"idddddddddddddddddddddddddddddddd");
      //    this.MasterS
      //    .getSinglePetitioner(k)
      //    .subscribe((datapetitioner) => {
      //      // this.petiById.push(k);
      //      console.log(datapetitioner,"petitioner dataaaaaaaaaaaa")
      //    });
      //   }
       
      //  }
   
    });
  }

  onforminit(userData:any) {
    this.saveForm = this.fb.group({
      next_hearing_date: [userData?.next_hearing_date],
    });
  }

  clickFunction(){
    this.isValidFormSubmittedCont = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.isValidFormSubmittedCont = true;
    } else {
      console.log(this.saveForm.value, 'true');
      console.log("Next Hearing date is added");
      
      this.CaseS
        .updateCase(this.saveForm.value,this.id)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/case-list';
          // this.saveForm.reset();
          this.hearingModal.nativeElement.click();

          
        });

    
    }

    

  }

  deleteUser(id: number){
    alert(" Data has been deleted.")
    this.CaseS.deleteCase(id).subscribe(
      (data: any)=> {this.CaseS.GetCaseData()
        // console.log(data);
        window.location.href = '/case-list';
      },

    );
  }

  viewdata(){
    this.CaseS.GetCaseData().subscribe((data: any) => {
      // console.log(data.resultData);
      this.getData = data.resultData;
      
    });
  }

  importCases(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
     let succcess=true
      console.log(data); 
      data.map(item=>{
        this.CaseS.importCase(item).subscribe((savedata:any)=>{
          succcess=true
          },err=>{
            succcess=false
          })

        // this.CaseS
        // .importCase(item)
        // .subscribe((data: any) => {
        //   if (data.statuscode === 200) {
        //     console.log('saved');
        //     this.toast.showSuccess(
        //       'Congratulation!, Data has been import.'
        //     );
        //     window.location.href = '/case-list';
        //   }
        //   else{
        //     this.toast.showError('Oops! Case no is all ready exist!');
        //   }
         

        // }); 
      })
      if(succcess){
        this.toast.showSuccess(
          'Congratulation!, Data has been import.'
        );
        window.location.href = '/case-list';
        // this.noteModal.nativeElement.click();
      }

      
    };
 } 

 hearing(e:any){
  this.id = $(this).attr("id");
  console.log(this.id);
  alert(this.id)
 } 

 showModal(id: number) {
  this.id = id;
  console.log(this.id);
  
  this.largeModal.show();
}

}

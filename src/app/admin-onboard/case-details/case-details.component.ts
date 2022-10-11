
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { CaseService } from 'src/app/services/case.service';
import { MasterService } from 'src/app/services/master.service';
import { ToasterService } from 'src/app/services/toaster.service';
export interface Beneficiary {
  _id: string;
  case_no: string;
}


@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
  @ViewChild('taskModal') taskModal: any;
  @ViewChild('docModal') docModal: any;
  @ViewChild('TaskStatus') TaskStatus: any;
  myControl = new FormControl('');
  options: string[] = [];


  filteredOptions: Observable<Beneficiary[]> | undefined;


  isShow = true;
  casedata: any;
  getCaseNoData: any;
  getDataCS: any;
  isValidFormSubmitted!: boolean;
  saveForm: any;
  caseid: any;
  isValidFormSubmittedTask!: boolean;
  saveFormTask: any;
  getDataDist: any;
  getDataExpectedAction: any;
  largeModal: any;
  detailsdata: any;
  sourceValue: any;
  showData: boolean = true;
  saveFormDoc: any;
  username: any;
  router: any;
  Udata: any;
  getDataUser: any;
  saveFormTaskStatus: any;
  isValidFormSubmittedTaskStatus!: boolean;
  id: any;
  EditDataTaskStatus: any;
  largeModal2: any;
  getDataTaskType: any;
  ids: any;
  refcasedata: any;
  beneficiarylist: Beneficiary[] = [];


  constructor(private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private CaseS: CaseService,
    private _Activatedroute: ActivatedRoute,
    private AuthS: AuthService,
  ) {
    this.caseid = this._Activatedroute.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.username = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : this.router.navigate(['/']);
    this.Udata = localStorage.getItem('userdata');



    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.MasterS
      .editCaseTask(this.id)
      .subscribe((data: any) => {
        console.log(data.updateData[0]);

        this.EditDataTaskStatus = data.updateData[0];
        this.onforminitTaskStatus(this.EditDataTaskStatus)
      })


    // this.caseid = this._Activatedroute.snapshot.paramMap.get('id');
    // console.log(this.caseid,"case id");
    this.MasterS
      .getDataCaseNoById(this.caseid)
      .subscribe((data: any) => {
        this.casedata = data.resultData;
        this.caseid = this.casedata[0]?._id

        this.onforminit()
      });



    this.getCaseNolist();
    this.statusData();
    this.onforminitTask();
    this.districtData();
    this.viewdataExpectedAction();
    this.onforminitDoc();
    this.viewdataUser();
    this.taskTypeData();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(beneficiarylist => (beneficiarylist ? this._filter(beneficiarylist) : this.beneficiarylist.slice())),
      // map(value => {
      //   const name = typeof value === 'string' ? value : value?._id;
      //   return name ? this._filter(name as string) : this.options.slice();
      // }),
    );

  }
  private _filter(value: string): Beneficiary[] {
    const filterValue = value.toLowerCase();
    this.getCaseNoData.filter((option: any) => option._id.toLowerCase().includes(filterValue))
    // return this.beneficiarylist.filter(beneficiarylist => beneficiarylist.case_no.toLowerCase().includes(filterValue));
    return this.getCaseNoData.filter((filterValue: any) => {
      if (filterValue === null || filterValue === undefined || filterValue === '') {
        // return true
        return this.beneficiarylist.filter(beneficiarylist => beneficiarylist._id.toLowerCase().includes(filterValue));
      }
      // else if (option._id.toLowerCase().includes(filterValue)) {
      //   // return true
      //   return this.beneficiarylist.filter(beneficiarylist => beneficiarylist._id.toLowerCase().includes(filterValue));
      // }
      else {
        // return false
        return this.beneficiarylist.filter(beneficiarylist => beneficiarylist._id.toLowerCase().includes(filterValue));
      }
    });
  }



  viewdataUser() {
    this.AuthS.getUser().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataUser = data.resultData;
    });
  }


  getCaseNolist() {
    this.MasterS.GetCaseNo().subscribe((data: any) => {
      // console.log(data.resultData,"case Data");
      this.getCaseNoData = data.resultData;
      // console.log(this.getCaseNoData,"case dataaaaaaaaaaaaaaa");

    });
  }


  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  getCaseNo(e: any) {
    let case_no = e;
    console.log(e)
    this.sourceValue = case_no;

    if (this.sourceValue === 'VALUEA') {
      this.showData = true;
    }
    else {
      this.showData = false;
    }

    this.MasterS
      .getDataCaseNoById({
        case_no: e,

      })
      .subscribe((data: any) => {
        this.casedata = data;
        this.caseid = this.casedata?.resultData[0]?._id
        console.log(this.caseid, "case id");
        // console.log(data,"case id data clubbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
        this.onforminit()
      });[5]
  }



  statusData() {
    this.MasterS.GetStatusdata().subscribe((data: any) => {
      // console.log(data.resultData);
      this.getDataCS = data.resultData;
    });
  }

  taskTypeData() {
    this.MasterS.getTaskType().subscribe((data: any) => {
      // console.log(data.resultData);
      this.getDataTaskType = data.resultData;
    });
  }


  districtData() {
    this.MasterS.GetDistrictata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDist = data.resultData;
    });
  }

  viewdataExpectedAction() {
    this.MasterS.getExpectedAction().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataExpectedAction = data.resultData;
    });
  }

  onforminit() {
    // console.log(userData[0].case_status_id,"oooooooooooo");

    this.saveForm = this.fb.group({

      hearing_date: ['', Validators.required],
      case_id: [this.caseid],
      next_hearing_date: [''],
      court_order_date: [''],
      // next_hearing_court_order_date:[''],
      hearing_details: [''],
      // hearing_document:[''],
      expected_action_type: ['', Validators.required],
      compliance_action: [''],
      compliance_action_start_date: [''],
      compliance_action_end_date: [''],
      land_mark_judgement: [''],
      case_status_id: ['', Validators.required],
      // land_mark_document:[''],
      club_case: [''],
      // case_task:['']

    })
  }

  clickFunction() {
    // console.log(this.saveForm)
    this.isValidFormSubmitted = false;
    if (this.saveForm.invalid) {
      console.log(this.saveForm, 'error');
      this.toast.showError(
        'Required fields are missing.'
      );
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveForm.value, 'true');
      console.log(this.saveForm);

      this.CaseS
        .saveCaseDetails(this.saveForm.value)
        .subscribe((data: any) => {
          console.log('saved');
          console.log(data);

          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          window.location.href = '/case-details';
        });
    }
  }

  get f() {
    return this.saveForm.controls;
  }
  onforminitTask() {
    this.saveFormTask = this.fb.group({
      task_case_id: [this.caseid],
      case_task_name: ['', Validators.required],
      case_task_type: ['', Validators.required],
      case_task_subject: [''],
      case_task_owner: ['', Validators.required],
      case_task_duedate: [''],
    });
  }

  clickFunctionTask() {
    //  console.log( this.saveFormTask);

    this.isValidFormSubmittedTask = false;
    if (this.saveFormTask.invalid) {
      console.log(this.saveFormTask, 'error');
      this.isValidFormSubmittedTask = true;
    } else {
      console.log(this.saveFormTask.value, 'true');
      console.log(this.saveFormTask);

      this.MasterS
        .saveCaseTaskData(this.saveFormTask.value)

        .subscribe((data: any) => {
          console.log(data, 'saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          // window.location.href = '/case-details';
          this.saveFormTask.reset();
          this.taskModal.nativeElement.click();

        });



    }


  }

  get task() {
    return this.saveFormTask.controls;
  }

  hearing(e: any) {
    this.caseid = $(this).attr("id");
    console.log(this.caseid);
    alert(this.caseid)
  }

  showModal(id: number) {
    this.caseid = id;
    console.log(this.caseid);

    this.largeModal.show();
  }

  onforminitDoc() {
    this.saveFormDoc = this.fb.group({
      doc_case_id: [this.caseid],
      case_doc_type: [''],
      case_doc_name: [''],
      // case_doc_size: [''],
      case_doc_attached_by: [this.username],
      case_document: [''],
    });
  }

  clickFunctionDoc() {
    this.isValidFormSubmittedTask = false;
    if (this.saveFormDoc.invalid) {
      console.log(this.saveFormDoc, 'error');
      this.isValidFormSubmittedTask = true;
    } else {
      console.log(this.saveFormDoc.value, 'true');
      console.log(this.saveFormDoc);

      this.MasterS
        .saveCaseDoc(this.saveFormDoc.value)

        .subscribe((data: any) => {
          console.log(data, 'saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          // window.location.href = '/case-details';
          this.saveFormDoc.reset();
          this.docModal.nativeElement.click();

        });

    }
  }

  get doc() {
    return this.saveFormDoc.controls;
  }

  uploadDocument($event: any) {
    let file = $event.target.files;
    if (
      file[0].type == 'image/png' ||
      file[0].type == 'image/jpg' ||
      file[0].type == 'image/jpeg' ||
      file[0].type == 'application/pdf' ||
      file[0].type == 'application/xlsx'
    ) {


      if (parseInt(file[0].size) > 5097152) { }
      else {
        const date = 'Wed Feb 20 2019 00:00:00 GMT-0400 (Atlantic Standard Time)';
        const time = '7:00 AM';
        this.CaseS.uploadFile(file[0]).subscribe((data: any) => {

          this.saveFormDoc.get('case_document')?.setValue(data?.body)
          this.saveFormDoc.get('case_document')?.updateValueAndValidity()
        })

      }
    }
    else { }

  }

  showModalTask(ids: number) {
    this.id = ids;
    // console.log(this.id,"case task id singale data");

    // this.largeModal2.show();
  }

  onforminitTaskStatus(userData: any) {
    this.saveFormTaskStatus = this.fb.group({
      status: [userData.status],
    });
  }

  clickFunctionStatusOfTask() {

    this.isValidFormSubmittedTaskStatus = false;
    if (this.saveFormTaskStatus.invalid) {
      console.log(this.saveFormTaskStatus, 'error');
      this.isValidFormSubmittedTaskStatus = true;
    } else {
      console.log(this.saveFormTaskStatus.value, 'true');
      this.MasterS
        .updateCaseTask(this.saveFormTaskStatus.value, this.id)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been Updated.'
          );
          // window.location.href = '/case-task-list';
          this.saveFormTaskStatus.reset()
          this.TaskStatus.nativeElement.click();
        });

    }


  }

  GetCaseNoByRefCaseId(e: any) {
    console.log(e.target.value);
    this.MasterS
      .GetCaseNoByRefCaseId({
        ref_case_no: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.refcasedata = data.resultData;
      });
  }
}

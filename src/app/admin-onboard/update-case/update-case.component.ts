
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { MasterService } from 'src/app/services/master.service';
import { CaseService } from 'src/app/services/case.service';
import { Form, UntypedFormBuilder, UntypedFormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-case',
  templateUrl: './update-case.component.html',
  styleUrls: ['./update-case.component.css']
})
@Injectable()
export class UpdateCaseComponent implements OnInit {
  reason_filing=true
  case_rejoinder_date=true
  case_no=true
  case_year=true
  pet_typeCondition: boolean = true
  res_typeCondition:boolean=true
  myControl = new UntypedFormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<any[]> | undefined;


  @ViewChild('noteModal') noteModal: any;
  @ViewChild('counsel') counsel: any;
  @ViewChild('respondent') respondent: any;
  @ViewChild('petitioner') petitioner: any;
  @ViewChild('representing') representing: any;
  getData: any;
  getDataC: any;
  getDataD: any;
  getDataS: any;
  getDataDist: any;
  getDataH: any;
  getDataO: any;
  getDataCE: any;
  getDataSE: any;
  getDataEE: any;
  getDataCl: any;
  getDataCS: any;
  getDataT: any;
  petitionerdata:any=[]
  saveFormPetitioner: any;
  isValidFormSubmitted!: boolean;
  saveFormRespondent: any;
  isValidFormSubmittedRes!: boolean;
  isValidFormSubmittedRepres!: boolean;
  saveFormRepresenting: any;
  saveFormCounsel: any;
  isValidFormSubmittedCoun!: boolean;
  saveFormContempt: any;
  isValidFormSubmittedCont!: boolean;
  unitDataByHo: any;
  getDataPet: any;
  getDataRes: any;
  petiById: any=[];
  resById: any;
  getDataContempt: any;
  saveFormMain: FormGroup;
  isValidFormSubmittedMain!: boolean;
  getDataRepresenting: any;
  getDataCounsel: any;
  represById: any;
  councelById: any;
  subOrgDataByOrg: any;

  date:Date | undefined; 
  year:any=[]; 

  

  public qrCodeVal: string;
  public width: number;
  closeModal: any;
  largeModal00: any;
  d: any;
  getDatacaseSub: any;
  seDataBySubOrg: any;
  EeDataBySe: any;
  getEEAllData: any;
  EeDataById: any;
  getCaseNo: any;
  refcasedata: any;
  caseid: any;
  caseData: any;

  event={
    target:{value:''}
    }
  router: any;
  username: any;
  Udata: any;
  logindata: any;

  constructor(
  
    private MasterS: MasterService,
    private fb: UntypedFormBuilder,
    private toast: ToasterService,
    private CaseS: CaseService,
    private _Activatedroute: ActivatedRoute,
  ) {
    this.saveFormMain = this.fb.group({
      // case_department_id: ['',Validators.required],
      case_contempt: ['No'],
      case_contempt_id: [''],
      reason_non_compliance:[''],
      case_slp: ['No'],
      hod: ['No'],
      case_court_id: ['',Validators.required],
      case_section_id: ['',Validators.required],
      case_district_id: ['',Validators.required],
      case_ho_id: ['',Validators.required],
      case_orgnaization_id: ['',Validators.required],
      // case_unit_id: ['',Validators.required],
      // case_ce_id: ['',Validators.required],
      case_se_id: ['',Validators.required],
      case_ee_id: ['',Validators.required],
      writ_status: ['Accepted',Validators.required],
      case_no: [''],
      case_year: [''],
      case_petitioner_id: ['',Validators.required],
      case_respondent_id: ['',Validators.required],
      case_notice_no: [''],
      case_filing_date: [''],
      case_type_id: ['',Validators.required],
      case_subject: ['',Validators.required],
      case_status_id: ['',Validators.required],
      case_classification_id: ['',Validators.required],
      case_prayer: [''],
      case_description: [''],
      ref_case_no: [''],
      case_affidavit_field: ['No'],
      case_affidavit_due_date: [''],
      case_affidavit_filing_date: [''],
      reason_affidavit_filing: [''],
      case_remark: [''],
      case_file_no: [''],
      case_document: [''],
      // case_representing_id: ['',Validators.required],
      case_counsel_id: ['',Validators.required],

      case_rejoinder: ['No'],
      case_rejoinder_date: [''],
      case_sun_org_id: ['',Validators.required],


    });
 
    this.qrCodeVal = "";
    this.width = 50;
   }

  


  ngOnInit(): void {


    this.username = localStorage.getItem('username')
    ? localStorage.getItem('username')
    : this.router.navigate(['/']);
  this.Udata = localStorage.getItem('userdata');
  let uddd = JSON.parse(this.Udata);

  this.logindata = JSON.parse(this.Udata);

    this.caseid = this._Activatedroute.snapshot.paramMap.get('id');

    this.CaseS
    .GetCaseSingle(this.caseid)
    .subscribe((data: any) => {
      this.caseData=data.resultData;
     
         
         this.event.target.value=this.caseData?.case_counsel_id
         this.getCouncelById(this.event)
         this.petitionerData()
         this.secData()
         this.event.target.value=this.caseData?.case_petitioner_id
         this.getPetiById(this.event)
         this.viewdataCaseSub()
         this.event.target.value=this.caseData?.case_respondent_id
         this.getResById(this.event)

         this.event.target.value=this.caseData?.case_ee_id
         this.getEeByIdData(this.event)

         

         this.respondentData()

         this.event.target.value=this.caseData?.case_sun_org_id
         this.getSeBySubOrgD(this.event)

         this.event.target.value=this.caseData?.case_se_id
         this.getEeBySeD(this.event)

        this.event.target.value=this.caseData?.case_orgnaization_id
        this.getSubOrgByOrgd(this.event)


        this.event.target.value=this.caseData?.case_ee_id
        this.getEeByIdData(this.event)



      
        
        this.event.target.value=this.caseData?.ref_case_no
        this.getCaseNoByRefNo(this.event)
        this.onforminitMain(this.caseData);
        
    })
    // if(this.caseData.case_affidavit_field==='Yes'){
    //   this.reason_filing=false

    // }
    
    var dateToday = new Date();
      var i;
      for(i=0;i<51;i++)
      {        
      var y = (dateToday.getFullYear() - i);
      this.year.push(y)
  
      }
 
    this.onforminitPet();
    this.onforminitRes();
    this.onforminitRepres();
    this.onforminitCoun();
    this.onforminitCont();

    this.deptData();
    this.courtData();
    this. secData();
    this.districtData();
    this.hoData();
    this. orgData();
    this.ceData();
    this.seData();
    this.eeData();
    this.typeData();
    this.statusData();
    this.classiData();
    this.petitionerData();
    this.respondentData();
    this.contemptData();
    this. representingData();
    this.counselData();
    this.  viewdataCaseSub();  
    this.viewdataEE();
    this. getCaseNolist();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
    console.log(this.filteredOptions,"Searching data petitioner");
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(value,this.getDataPet.filter((option:any) => option.name.toLowerCase().includes(filterValue)))
    return this.getDataPet.filter((option:any) =>{ 
      if(filterValue===null||filterValue===undefined||filterValue===''){
      return  true
      }
      else if( option.name.toLowerCase().includes(filterValue)){
        return true
      }
      else{
        return false
      }
     });
  }




  getCaseNolist(){
    this.MasterS.GetCaseNo().subscribe((data: any) => {
      // console.log(data.resultData);
      this.getCaseNo = data.resultData;
    });
  }

  viewdataCaseSub(){
    this.MasterS.GetCaseSubject().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDatacaseSub = data.resultData;
    });
  }
  

  deptData(){
    this.MasterS.GetDeptdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataD = data.resultData;
    });
  }
  courtData(){
    this.MasterS.GetCourtdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataC = data.resultData;
    });
  }
  secData(){
    this.MasterS.GetSecdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataS = data.resultData;
    });
  }
  districtData(){
    this.MasterS.GetDistrictata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataDist = data.resultData;
    });
  }
  hoData(){
    this.MasterS.GetHOdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataH = data.resultData;
    });
  }
  orgData(){
    this.MasterS.GetOrgdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataO = data.resultData;
    });
  }
  ceData(){
    this.MasterS.GetCEdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataCE = data.resultData;
    });
  }
  seData(){
    this.MasterS.GetSEdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataSE = data.resultData;
    });
  }
  eeData(){
    this.MasterS.GetEEdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataEE = data.resultData;
    });
  }
  typeData(){
    this.MasterS.GetTypedata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataT = data.resultData;
    });
  }
  statusData(){
    this.MasterS.GetStatusdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataCS = data.resultData;
    });
  }
  classiData(){
    this.MasterS.GetClassidata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataCl = data.resultData;
    });
  }
  contemptData(){
    this.MasterS.GetContemptdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataContempt = data.resultData;
    });
  }

  getCaseNoByRefNo(e: any) {
    console.log(e.target.value);
    this.MasterS
      .GetCaseNoByRefNo({
        ref_case_no: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.refcasedata = data?.resultData;
      });
  }

  getUnitByhoffice(e: any) {
    console.log(e.target.value);
    this.MasterS
      .getUnitByHo({
        head_office_id: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.unitDataByHo = data.result;
      });
  }

  getSubOrgByOrgd(e: any) {
    console.log(e.target.value);
    this.MasterS
      .getSubOrgByOrg({
        case_sun_org_id: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.subOrgDataByOrg = data.result;
      });
      this.saveFormMain.controls.case_se_id.reset();
      this.saveFormMain.controls.case_ee_id.reset();
      
  }

  getSeBySubOrgD(e: any) {
    console.log(e.target.value);
    
    this.MasterS
      .getSeBySubOrgData({
        case_se_id: e.target.value,
      })
      .subscribe((data: any) => {
        this.seDataBySubOrg = data.result;
      });

      this.saveFormMain.controls.case_ee_id.reset();
  }

  getEeBySeD(e: any) {
    console.log(e.target.value);
 
    this.MasterS
      .getEeBySeData({
        case_ee_id: e.target.value,
      })
      .subscribe((data: any) => {
        this.EeDataBySe = data.result;
      });
  }

  getEeByIdData(e: any) {
    console.log(e.target.value);
    this.MasterS
      .getEeByIdData({
        case_ee_id: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data,"EE data by id");
        
        this.EeDataById = data.resultData;
      });
  }

  viewdataEE(){
    this.MasterS.GetEEdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getEEAllData = data.resultData;
    });
  }

  petitionerData(){
    this.MasterS.GetPetitionerdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataPet = data.resultData;
      
      // this.filteredList1 =this.getDataPet.slice();
    });
  }
   respondentData(){
    this.MasterS.GetRespondentdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataRes = data.resultData;
    });
  }
  representingData(){
    this.MasterS.GetRepresentingdata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataRepresenting = data.resultData;
    });
  }

 counselData(){
    this.MasterS.GetCounseldata().subscribe((data: any) => {
      console.log(data.resultData);
      this.getDataCounsel = data.resultData;
    });
  }

  getPetiById(e: any) {
    console.log(e.target.value);
    this.MasterS
      .getPetiByIdData({
        case_petitioner_id: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.petiById.push(data.resultData) 
        this.petiById=data.resultData
      });
  }

  getResById(e: any) {
    console.log(e.target.value);
    this.MasterS
      .getResByIdData({
        case_respondent_id: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.resById = data.resultData;
      });
  }

 
  // getRepresById(e: any) {
  //   console.log(e.target.value);
  //   this.MasterS
  //     .getRepresByIdData({
  //       case_representing_id: e.target.value,
  //     })
  //     .subscribe((data: any) => {
  //       console.log(data.resultData[0].repres_district_id.district);
  //       this.represById = data.resultData;
  //     });
  // }

  // getRepresById(e: any) {
  //   console.log(e.target.value);
  //   this.MasterS
  //     .getResByIdData({
  //       case_respondent_id: e.target.value,
  //     })
  //     .subscribe((data: any) => {
  //       console.log(data);
  //       this.represById = data.resultData;
  //     });
  // }

  getCouncelById(e: any) {
    console.log(e.target.value);
    this.MasterS
      .getCouncelByIdData({
        case_counsel_id: e.target.value,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.councelById = data.resultData;
      });
  }


  onforminitPet() {
    this.saveFormPetitioner = this.fb.group({
      pet_employee: ['Employee'],
      pet_name: ['', Validators.required],
      pet_designation: ['', Validators.required],
      pet_email: ['', [Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
      pet_mobile: ['', [Validators.pattern('^[0-9][0-9]{9}$')]],
      pet_district_id: ['', Validators.required],
      pet_block: [''],
      pet_village: [''],
      pet_pincode: ['', [Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
      pet_address: [''],

      pet_divition: [''],
    });
  }

  clickFunction() {
    this.isValidFormSubmitted = false;
    if (this.saveFormPetitioner.invalid) {
      console.log(this.saveFormPetitioner, 'error');
      this.isValidFormSubmitted = true;
    } else {
      console.log(this.saveFormPetitioner.value, 'true');
      this.MasterS
        .savePetitioner(this.saveFormPetitioner.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          // window.location.href = '/case-classification-list';
          this.saveFormPetitioner.reset()
          this.petitioner.nativeElement.click();
          
        });

        this.MasterS.GetPetitionerdata().subscribe((data: any) => {
          console.log(data.resultData);
          this.getDataPet = data.resultData;
        });
    }
 

  }

  get f() {
    return this.saveFormPetitioner.controls;
  }

  pet_type(type: any) {
    if (type === 'Employee') {
      this.pet_typeCondition = true
      this.f['pet_designation'].setValidators([Validators.required]);
      this.f['pet_designation'].updateValueAndValidity();

    }
    else {
      this.pet_typeCondition = false
      this.f['pet_designation'].clearValidators();
      this.f['pet_designation'].updateValueAndValidity();
    }
  }

  onforminitRes() {
    this.saveFormRespondent = this.fb.group({
      res_employee: ['Employee'],
      res_name: ['', Validators.required],
      res_designation: ['', Validators.required],
      res_email: ['', [Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),]],
      res_mobile: ['', [Validators.pattern('^[0-9][0-9]{9}$')]],
      res_district_id: ['', Validators.required],
      res_block: [''],
      res_village: [''],
      res_pincode: ['', [Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
      res_address: [''],

      res_divition: [''],
    });
  }

  clickFunctionRes() {
    this.isValidFormSubmittedRes = false;
    if (this.saveFormRespondent.invalid) {
      console.log(this.saveFormRespondent, 'error');
      this.isValidFormSubmittedRes = true;
    } else {
      console.log(this.saveFormRespondent.value, 'true');
      this.MasterS
        .saveRespondent(this.saveFormRespondent.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          // window.location.href = '/case-classification-list';
          this.saveFormRespondent.reset();
          this.respondent.nativeElement.click();
        });


        this.MasterS.GetRespondentdata().subscribe((data: any) => {
          console.log(data.resultData);
          this.getDataRes = data.resultData;
        });
    }
  }

  get res() {
    return this.saveFormRespondent.controls;
  }

  respondent_type(type: any) {
    if (type === 'Employee') {
      this.res_typeCondition = true
      this.res['res_designation'].setValidators([Validators.required]);
      this.res['res_designation'].updateValueAndValidity();

    }
    else {
      this.res_typeCondition = false
      this.res['res_designation'].clearValidators();
      this.res['res_designation'].updateValueAndValidity();
    }
  }
  onforminitRepres() {
    this.saveFormRepresenting = this.fb.group({
      repres_name: ['',Validators.required],
      repres_designation: ['',Validators.required],
      repres_email: ['',Validators.required],
      repres_mobile: ['',Validators.required],
      repres_district_id: ['',Validators.required],
      repres_block: [''],
      repres_village: [''],
      repres_pincode: [''],
      repres_address: [''],
    });
  }

  clickFunctionRepres() {
    this.isValidFormSubmittedRepres = false;
    if (this.saveFormRepresenting.invalid) {
      console.log(this.saveFormRepresenting, 'error');
      this.isValidFormSubmittedRepres = true;
    } else {
      console.log(this.saveFormRepresenting.value, 'true');
      this.MasterS
        .saveRepresenting(this.saveFormRepresenting.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          // window.location.href = '/case-classification-list';
          this.saveFormRepresenting.reset();
          this.representing.nativeElement.click();
        });

        this.MasterS.GetRepresentingdata().subscribe((data: any) => {
          console.log(data.resultData);
          this.getDataRepresenting = data.resultData;
        });
    }
  }

  get repres() {
    return this.saveFormRepresenting.controls;
  }

  onforminitCoun() {
    this.saveFormCounsel = this.fb.group({
      coun_name: ['',Validators.required],
      coun_email: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
      ]],
      coun_mobile: ['',[Validators.required, Validators.pattern('^[0-9][0-9]{9}$')]],
    });
  }

  clickFunctionCounsel() {
    this.isValidFormSubmittedCoun = false;
    if (this.saveFormCounsel.invalid) {
      console.log(this.saveFormCounsel, 'error');
      this.isValidFormSubmittedCoun = true;
    } else {
      console.log(this.saveFormCounsel.value, 'true');
      this.MasterS
        .saveCounsel(this.saveFormCounsel.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          // window.location.href = '/case-classification-list';
          this.saveFormCounsel.reset();
          this.counsel.nativeElement.click();
        });

        this.MasterS.GetCounseldata().subscribe((data: any) => {
          console.log(data.resultData);
          this.getDataCounsel = data.resultData;
        });
    }
  }

  get coun() {
    return this.saveFormCounsel.controls;
  }

  onforminitCont() {
    this.saveFormContempt = this.fb.group({
      contempt_no: ['',Validators.required],
      contempt_year: [''],
      contempt_reason: [''],
      contempt_status: [''],
      contempt_remark: ['']
    });
  }

  // clickFunctionContempt() {
  //   this.isValidFormSubmittedCont = false;
  //   if (this.saveFormContempt.invalid) {
  //     console.log(this.saveFormContempt, 'error');
  //     this.isValidFormSubmittedCont = true;
  //   } else {
  //     console.log(this.saveFormContempt.value, 'true');
  //     this.MasterS
  //       .saveContempt(this.saveFormContempt.value)
  //       .subscribe((data: any) => {
  //         console.log('saved');
  //         this.toast.showSuccess(
  //           'Congratulation!, Data has been submited.'
  //         );
  //         // window.location.href = '/case-classification-list';
  //         this.saveFormContempt.reset()
  //       });
  //   }
  // }

  clickFunctionContempt() {
    this.isValidFormSubmittedCont = false;
    if (this.saveFormContempt.invalid) {
      console.log(this.saveFormContempt, 'error');
      this.isValidFormSubmittedCont = true;
    } else {
      console.log(this.saveFormContempt.value, 'true');
      this.MasterS
        .saveContempt(this.saveFormContempt.value)
        .subscribe((data: any) => {
          console.log('saved');
          this.toast.showSuccess(
            'Congratulation!, Data has been submited.'
          );
          // window.location.href = '/case-classification-list';
          this.saveFormContempt.reset();
          this.noteModal.nativeElement.click();

          
        });

        this.MasterS.GetContemptdata().subscribe((data: any) => {
          console.log(data.resultData,'Contempt Data');
          this.getDataContempt = data.resultData;
        });
    
    }

    

  }

  get cont() {
    return this.saveFormContempt.controls;
  }


  onforminitMain(userData: any) {
    this.saveFormMain = this.fb.group({
      // case_department_id: ['',],hod
      
      case_contempt: [userData?.case_contempt],
      case_contempt_id: [userData?.case_contempt_id],
      reason_non_compliance:[userData?.reason_non_compliance],
      case_slp: [userData?.case_slp],
      hod: [userData?.hod],
      case_court_id: [userData?.case_court_id],
      case_section_id: [userData?.case_section_id],
      case_district_id: [userData?.case_district_id],
      case_ho_id: [userData?.case_ho_id],
      case_orgnaization_id:[],
      // case_unit_id: ['',],
      // case_ce_id: ['',],
      case_se_id: [userData?.case_se_id],
      case_ee_id: [userData?.case_ee_id],
      writ_status: [userData?.writ_status],
      case_no: [userData?.case_no],
      case_year: [userData?.case_year],
      case_petitioner_id: [userData?.case_petitioner_id],
      case_respondent_id: [userData?.case_respondent_id],
      case_notice_no: [userData?.case_notice_no],
      case_filing_date: [userData?.case_filing_date],
      case_type_id: [userData?.case_type_id],
      case_subject: [userData?.case_subject],
      case_status_id: [userData?.case_status_id],
      case_classification_id: [userData?.case_classification_id],
      case_prayer: [userData?.case_prayer],
      case_description: [userData?.case_description],
      ref_case_no: [userData?.ref_case_no],
      case_affidavit_field: [userData?.case_affidavit_field],
      case_affidavit_due_date: [userData?.case_affidavit_due_date],
      case_affidavit_filing_date: [userData?.case_affidavit_filing_date],
      reason_affidavit_filing: [userData?.reason_affidavit_filing],
      case_remark: [userData?.case_remark],
      case_file_no: [userData?.case_file_no],
      case_document: [userData?.case_document],
      // case_representing_id: ['',],
      case_counsel_id: [userData?.case_counsel_id],

      case_rejoinder: [userData?.case_rejoinder],
      case_rejoinder_date: [userData?.case_rejoinder_date],
      case_sun_org_id: [],

      case_doc_type: [userData?.case_doc_type],
      case_doc_name: [userData?.case_doc_name],
      created_by: [this.username],
      // attached_by_id: [this.username],
    });
    if(userData?.case_affidavit_field==='Yes'){
      this.reason_filingvisibility(false)
    }
    else{
      this.reason_filingvisibility(true)
    }

    if(userData?.case_rejoinder==='Yes'){
      this.rejoindervisibility(true)
    }
    else{
      this.rejoindervisibility(false)
    }


    if(userData?.writ_status==='Accepted'){
      this.writ_statusvisibility(true)
    }
    else{
      this.writ_statusvisibility(false)
    }

   
    // this.saveFormMain
    // console.log(userData,'userData.orgData._id')this
    this.saveFormMain.get('case_orgnaization_id')?.setValue(userData.case_affidavit_due_date)
    this.saveFormMain.get('case_sun_org_id')?.setValue(userData.case_sun_org_id)
    this.saveFormMain.get('case_se_id')?.setValue(userData.case_se_id)
    this.saveFormMain.get('case_orgnaization_id')?.setValue(userData.case_orgnaization_id)
    this.saveFormMain.get('case_sun_org_id')?.setValue(userData.case_sun_org_id)
    this.saveFormMain.get('case_se_id')?.setValue(userData?.case_se_id)
    this.seDataBySubOrg?.map((item:any)=>{
      if(item.se_name!==userData?.case_se_id){
        console.log(userData?.case_se_id,true)
      }
    })
    this.saveFormMain.get('case_section_id')?.setValue(userData?.case_section_id)
    // this.saveFormMain.get('case_ee_id')?.setValue(userData?.case_ee_id[1])
    this.saveFormMain.updateValueAndValidity()
   
    
  }

  clickFunctionMain() {
    console.log(this.saveFormMain)
   
    this.isValidFormSubmittedMain = false;
    if (this.saveFormMain.invalid) {
      console.log(this.saveFormMain, 'error');
      this.isValidFormSubmittedMain = true;
    } else {
      console.log(this.saveFormMain.value, 'true');
      this.CaseS
        .updateCase(this.saveFormMain.value, this.caseid)
        .subscribe((data: any) => {
          // if (data.statuscode === 200) {
            console.log('saved');
            this.toast.showSuccess(
              'Congratulation!, Data has been submited.'
            );
            window.location.href = '/case-list';
          // }
          // else{
          //   this.toast.showError('Oops! Case no is all ready exist!');
          // }
         

        }); 
    }
  }
  uploadDocument($event:any){
    let file = $event.target.files;
    if (
      file[0].type == 'image/png' ||
      file[0].type == 'image/jpg' ||
      file[0].type == 'image/jpeg' ||
      file[0].type == 'application/pdf'||
      file[0].type == 'application/xlsx'
    ) {


      if (parseInt(file[0].size) > 5097152) {}
    else {
      const date = 'Wed Feb 20 2019 00:00:00 GMT-0400 (Atlantic Standard Time)';
      const time = '7:00 AM';
      this.CaseS.uploadFile(file[0]).subscribe((data: any) => {
      
 this.saveFormMain.get('case_document')?.setValue(data?.body)
 this.saveFormMain.get('case_document')?.updateValueAndValidity()
      })

      }
    }
    else {}

  }

  get main() {
    return this.saveFormMain.controls;
  }
  bindPetitioner(id:any){
    if(this.petitionerdata.length<0){
      this.getDataPet.map((item:any)=>{
        if(item._id===id){
this.petitionerdata.push(item)
        }
      })
    }
    else{
      this.getDataPet.map((item:any)=>{
        if(item._id===id){
          let petitioner=false
this.petitionerdata.map((data:any)=>{
if(data._id===id){
  petitioner=true
}
})
if(!petitioner){
  this.petitionerdata.push(item)
}
        }
      })
    }
 
    this.myControl.reset()
    console.log(this.petitionerdata)
  }

  
  
  reason_filingvisibility(value:boolean){
    this.reason_filing=value
  }

  rejoindervisibility(value:boolean){
    this.case_rejoinder_date=value
  }

  writ_statusvisibility(value:boolean){
    this.case_no=value
    this.case_year=value
  }
 
  filter(data: any) {
    this.petiById=[]
    let petitionerData= this.saveFormMain.value.case_petitioner_id
   //  console.log(petitionerData)
    for(let i of petitionerData){
     console.log(i)
     this.MasterS
       .getPetiByIdData({
         case_petitioner_id: i,
       })
       .subscribe((data: any) => {
         console.log(data.resultData[0])
         this.petiById.push(data.resultData[0]);
         // console.log(data);
 
       });
     }
    
  }

  filterRespondent(data: any) {
    this.resById=[]
    let respondentData= this.saveFormMain.value.case_respondent_id
   //  console.log(petitionerData)
    for(let i of respondentData){
     console.log(i)
     this.MasterS
       .getResByIdData({
         case_respondent_id: i,
       })
       .subscribe((data: any) => {
         console.log(data.resultData[0])
         this.resById.push(data.resultData[0]);
         // console.log(data);
 
       });
     }
    
  }

  filterCouncel(data: any) {
    this.councelById=[]
    let councelData= this.saveFormMain.value.case_counsel_id
   //  console.log(petitionerData)
    for(let i of councelData){
     console.log(i)
     this.MasterS
       .getCouncelByIdData({
        case_counsel_id: i,
       })
       .subscribe((data: any) => {
         console.log(data.resultData[0])
         this.councelById.push(data.resultData[0]);
         // console.log(data);
 
       });
     }
    
  }
}

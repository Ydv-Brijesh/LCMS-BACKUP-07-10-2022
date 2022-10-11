import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { base_url } from '../global';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient, private router: Router) { }

  saveHO(data: any) {
    let api_url = base_url + 'add-HO';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveOrganization(data: any) {
    let api_url = base_url + 'add-organization';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  saveSection(data: any) {
    let api_url = base_url + 'add-GovtSec';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }



  saveUnit(data: any) {
    let api_url = base_url + 'add-unit';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveCourt(data: any) {
    let api_url = base_url + 'add-court';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  saveDept(data: any) {
    let api_url = base_url + 'add-dept';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  saveCE(data: any) {
    let api_url = base_url + 'add-ce';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  saveSE(data: any) {
    let api_url = base_url + 'add-se';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  saveEE(data: any) {
    let api_url = base_url + 'add-ee';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  saveCaseType(data: any) {
    let api_url = base_url + 'add-caseType';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveCaseStatus(data: any) {
    let api_url = base_url + 'add-caseStatus';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveCaseClassi(data: any) {
    let api_url = base_url + 'add-caseClassi';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  GetHOdata() {
    let api_url = base_url + 'view-Ho';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetCourtdata() {
    let api_url = base_url + 'view-Court';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetOrgdata() {
    let api_url = base_url + 'view-Org';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetSecdata() {
    let api_url = base_url + 'view-Sec';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetDistrictata() {
    let api_url = base_url + 'view-District';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }
  GetUnitdata() {
    let api_url = base_url + 'view-Unit';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetDeptdata() {
    let api_url = base_url + 'view-Dept';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetCEdata() {
    let api_url = base_url + 'view-Ce';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }
  GetSEdata() {
    let api_url = base_url + 'view-Se';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetEEdata() {
    let api_url = base_url + 'view-Ee';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetTypedata() {
    let api_url = base_url + 'view-Type';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetClassidata() {
    let api_url = base_url + 'view-Classi';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetStatusdata() {
    let api_url = base_url + 'view-Case-Status';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  savePetitioner(data: any) {
    let api_url = base_url + 'add-petitioner';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveRespondent(data: any) {
    let api_url = base_url + 'add-respondent';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveRepresenting(data: any) {
    let api_url = base_url + 'add-representing';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveCounsel(data: any) {
    let api_url = base_url + 'add-counsel';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  saveContempt(data: any) {
    let api_url = base_url + 'add-contempt';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  getUnitByHo(data: any) {
    let api_url = base_url + 'get-UnitByHo';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  GetPetitionerdata() {
    let api_url = base_url + 'get-petitioner';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetRespondentdata() {
    let api_url = base_url + 'get-respondent';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetRepresentingdata() {
    let api_url = base_url + 'get-representing';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetCounseldata() {
    let api_url = base_url + 'get-counsel';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  getPetiByIdData(data: any) {
    let api_url = base_url + 'get-petiById';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getResByIdData(data: any) {
    let api_url = base_url + 'get-resById';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }
  getRepresByIdData(data: any) {
    let api_url = base_url + 'get-represById';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getCouncelByIdData(data: any) {
    let api_url = base_url + 'get-councelById';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  GetContemptdata() {
    let api_url = base_url + 'get-contempt';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  GetSubOrgdata() {
    let api_url = base_url + 'get-subOrg';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  saveSubOrg(data: any) {
    let api_url = base_url + 'add-subOrg';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getSubOrgByOrg(data: any) {
    let api_url = base_url + 'get-SubOrgByHo';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }


  saveCaseSubject(data: any) {
    let api_url = base_url + 'addCaseSubject';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  GetCaseSubject() {
    let api_url = base_url + 'getCaseSubject';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  getSubOrAllData() {
    let api_url = base_url + 'getSubOrgAlldata';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url,  httpOptions);
  }

  getSeBySubOrgData(data: any) {
    let api_url = base_url + 'get-SEBySubOrg';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getEeBySeData(data: any) {
    let api_url = base_url + 'get-EEBySE';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getEeByIdData(data: any) {
    let api_url = base_url + 'get-EEById';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }








  editHo(id: any) {
    let api_url = base_url + 'edit-ho/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateHo(data: any, id: any) {
    let api_url = base_url + 'update-ho/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteHo(id: any) {
    let api_url = base_url + 'delete-ho/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  editGovtSec(id: any) {
    let api_url = base_url + 'edit-GovtSec/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateGovtSec(data: any, id: any) {
    let api_url = base_url + 'update-GovtSec/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteGovtSec(id: any) {
    let api_url = base_url + 'delete-GovtSec/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  editCourt(id: any) {
    let api_url = base_url + 'edit-Court/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCourt(data: any, id: any) {
    let api_url = base_url + 'update-Court/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteCourt(id: any) {
    let api_url = base_url + 'delete-Court/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  editOrg(id: any) {
    let api_url = base_url + 'edit-Org/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateOrg(data: any, id: any) {
    let api_url = base_url + 'update-Org/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteOrg(id: any) {
    let api_url = base_url + 'delete-Org/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  editSubOrg(id: any) {
    let api_url = base_url + 'edit-SubOrg/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateSubOrg(data: any, id: any) {
    let api_url = base_url + 'update-SubOrg/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteSubOrg(id: any) {
    let api_url = base_url + 'delete-SubOrg/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetCaseNo() {
    let api_url = base_url + 'get-caseno';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetCaseNoByRefNo(data:any) {
    let api_url = base_url + 'get-casenoByRef';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data, httpOptions);
  }

  GetCaseNoByRefCaseId(data:any) {
    let api_url = base_url + 'get-CaseNoByRefCaseId';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data, httpOptions);
  }

  editSE(id: any) {
    let api_url = base_url + 'edit-SE/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateSE(data: any, id: any) {
    let api_url = base_url + 'update-SE/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteSE(id: any) {
    let api_url = base_url + 'delete-SE/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  editEE(id: any) {
    let api_url = base_url + 'edit-EE/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateEE(data: any, id: any) {
    let api_url = base_url + 'update-EE/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteEE(id: any) {
    let api_url = base_url + 'delete-EE/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }
 
  editCaseType(id: any) {
    let api_url = base_url + 'edit-CaseType/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCaseType(data: any, id: any) {
    let api_url = base_url + 'update-CaseType/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteCaseType(id: any) {
    let api_url = base_url + 'delete-CaseType/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  editCaseStatus(id: any) {
    let api_url = base_url + 'edit-CaseStatus/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCaseStatus(data: any, id: any) {
    let api_url = base_url + 'update-CaseStatus/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteCaseStatus(id: any) {
    let api_url = base_url + 'delete-CaseStatus/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  editCaseSubject(id: any) {
    let api_url = base_url + 'edit-CaseSubject/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCaseSubject(data: any, id: any) {
    let api_url = base_url + 'update-CaseSubject/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteCaseSubject(id: any) {
    let api_url = base_url + 'delete-CaseSubject/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  editCaseClassi(id: any) {
    let api_url = base_url + 'edit-CaseClassi/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCaseClassi(data: any, id: any) {
    let api_url = base_url + 'update-CaseClassi/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteCaseClassi(id: any) {
    let api_url = base_url + 'delete-CaseClassi/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  editPetitioner(id: any) {
    let api_url = base_url + 'edit-Petitioner/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updatePetitioner(data: any, id: any) {
    let api_url = base_url + 'update-Petitioner/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deletePetitioner(id: any) {
    let api_url = base_url + 'delete-Petitioner/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  editCouncel(id: any) {
    let api_url = base_url + 'edit-Councel/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCouncel(data: any, id: any) {
    let api_url = base_url + 'update-Councel/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteCouncel(id: any) {
    let api_url = base_url + 'delete-Councel/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  editRespondent(id: any) {
    let api_url = base_url + 'edit-Respondent/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateRespondent(data: any, id: any) {
    let api_url = base_url + 'update-Respondent/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteRespondent(id: any) {
    let api_url = base_url + 'delete-Respondent/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  GetCaseNoData(data:any) {
    let api_url = base_url + 'getCaseNoData';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data, httpOptions);
  }


  getDataCaseNoById(data:any) {
    let api_url = base_url + 'get-dataCaseNoById';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data, httpOptions);
  }


  getSinglePetitioner(id: any) {
    let api_url = base_url + 'get-SingleDataPetitionerId/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  saveCaseTaskData(data: any) {
    let api_url = base_url + 'addCaseTask';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data,  httpOptions);
  }

  getCaseTaskData() {
    let api_url = base_url + 'getCaseTask';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url,  httpOptions);
  }

  editCaseTask(id: any) {
    let api_url = base_url + 'edit-CaseTask/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCaseTask(data: any, id: any) {
    let api_url = base_url + 'update-CaseTask/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteCaseTask(id: any) {
    let api_url = base_url + 'delete-CaseTask/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  saveExpectedAction(data: any) {
    let api_url = base_url + 'addExpectedAction';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data,  httpOptions);
  }

  getExpectedAction() {
    let api_url = base_url + 'getExpectedAction';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url,  httpOptions);
  }

  editExpectedAction(id: any) {
    let api_url = base_url + 'edit-ExpectedAction/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateExpectedAction(data: any, id: any) {
    let api_url = base_url + 'update-ExpectedAction/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteExpectedAction(id: any) {
    let api_url = base_url + 'delete-ExpectedAction/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  saveCaseDoc(data: any) {
    let api_url = base_url + 'add-CaseDoc';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data,  httpOptions);
  }

  getCaseDoc() {
    let api_url = base_url + 'get-CaseDoc';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url,  httpOptions);
  }

  editCaseDoc(id: any) {
    let api_url = base_url + 'edit-CaseDocument/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateCaseDoc(data: any, id: any) {
    let api_url = base_url + 'update-CaseDocument/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }



  
  saveTaskType(data: any) {
    let api_url = base_url + 'TaskTypeAdd';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.post(api_url,data,  httpOptions);
  }

  getTaskType() {
    let api_url = base_url + 'TaskTypeGet';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url,  httpOptions);
  }

  editTaskType(id: any) {
    let api_url = base_url + 'TyaskTypeEdit/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

  updateTaskType(data: any, id: any) {
    let api_url = base_url + 'TaskTypeUpdate/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  deleteTaskType(id: any) {
    let api_url = base_url + 'TaskTypeDelete/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }


  getCaseDocument() {
    let api_url = base_url + 'getCaseDocument';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url,  httpOptions);
  }

  deleteCaseDocument(id: any) {
    let api_url = base_url + 'DocumentDelete/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
      }),
    };
    return this.http.get(api_url, httpOptions);
  }

}

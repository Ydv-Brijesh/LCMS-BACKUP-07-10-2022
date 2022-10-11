import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './admin-onboard/dashboard/dashboard.component';
import { ListviewComponent } from './listview/listview.component';
import { FormviewComponent } from './formview/formview.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './admin-onboard/sidenav/sidenav.component';
import { Listview2Component } from './listview2/listview2.component';
import { Formview2Component } from './formview2/formview2.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { AddCaseComponent } from './admin-onboard/add-case/add-case.component';
import { CaseListComponent } from './admin-onboard/case-list/case-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DepartmentAddComponent } from './Master/department-add/department-add.component';
import { CourtAddComponent } from './Master/court-add/court-add.component';
import { CourtListComponent } from './Master/court-list/court-list.component';
import { DepartmentListComponent } from './Master/department-list/department-list.component';
import { UnitListComponent } from './Master/unit-list/unit-list.component';
import { UnitAddComponent } from './Master/unit-add/unit-add.component';
import { HoSectionListComponent } from './Master/ho-section-list/ho-section-list.component';
import { HoSectionAddComponent } from './Master/ho-section-add/ho-section-add.component';
import { OrgnaisationAddComponent } from './Master/orgnaisation-add/orgnaisation-add.component';
import { OrgnaisationListComponent } from './Master/orgnaisation-list/orgnaisation-list.component';
import { GovtSectionListComponent } from './Master/govt-section-list/govt-section-list.component';
import { GovtSectionAddComponent } from './Master/govt-section-add/govt-section-add.component';
import { CEAddComponent } from './Master/ce-add/ce-add.component';
import { CEListComponent } from './Master/ce-list/ce-list.component';
import { SEListComponent } from './Master/se-list/se-list.component';
import { SEAddComponent } from './Master/se-add/se-add.component';
import { EEAddComponent } from './Master/ee-add/ee-add.component';
import { EEListComponent } from './Master/ee-list/ee-list.component';
import { CaseTypeListComponent } from './Master/case-type-list/case-type-list.component';
import { CaseTypeAddComponent } from './Master/case-type-add/case-type-add.component';
import { CaseStatusAddComponent } from './Master/case-status-add/case-status-add.component';
import { CaseStatusListComponent } from './Master/case-status-list/case-status-list.component';
import { CaseClassificationListComponent } from './Master/case-classification-list/case-classification-list.component';
import { CaseClassificationAddComponent } from './Master/case-classification-add/case-classification-add.component';
import { PetitionerListComponent } from './Master/petitioner-list/petitioner-list.component';
import { RespondentListComponent } from './Master/respondent-list/respondent-list.component';
import { RepresentingOfficerListComponent } from './Master/representing-officer-list/representing-officer-list.component';
import { CounselListComponent } from './Master/counsel-list/counsel-list.component';
import { ContemptListComponent } from './Master/contempt-list/contempt-list.component';
import { SubOrganaizationListComponent } from './Master/sub-organaization-list/sub-organaization-list.component';
import { SubOrganaizationAddComponent } from './Master/sub-organaization-add/sub-organaization-add.component';
import { UpdateCaseComponent } from './admin-onboard/update-case/update-case.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSelectFilterModule } from 'mat-select-filter';
import {MatSelectModule} from "@angular/material/select";
import { DataTablesModule } from 'angular-datatables';
import { CaseSubjectListComponent } from './Master/case-subject-list/case-subject-list.component';
import { CaseSubjectAddComponent } from './Master/case-subject-add/case-subject-add.component';
import { HoSectionUpdateComponent } from './Master/ho-section-update/ho-section-update.component';
import { GovtSectionUpdateComponent } from './Master/govt-section-update/govt-section-update.component';
import { CourtUpdateComponent } from './Master/court-update/court-update.component';
import { OrganizationUpdateComponent } from './Master/organization-update/organization-update.component';
import { SubOrganizationUpdateComponent } from './Master/sub-organization-update/sub-organization-update.component';
import { SeUpdateComponent } from './Master/se-update/se-update.component';



import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { EeUpdateComponent } from './Master/ee-update/ee-update.component';
import { CaseTypeUpdateComponent } from './Master/case-type-update/case-type-update.component';
import { CaseStatusUpdateComponent } from './Master/case-status-update/case-status-update.component';
import { CaseSubjectUpdateComponent } from './Master/case-subject-update/case-subject-update.component';
import { CaseClassificationUpdateComponent } from './Master/case-classification-update/case-classification-update.component';
import { PetitionerUpdateComponent } from './Master/petitioner-update/petitioner-update.component';
import { CouncelUpdateComponent } from './Master/councel-update/councel-update.component';
import { RespondentUpdateComponent } from './Master/respondent-update/respondent-update.component';
import { CouncelDetailsComponent } from './Master/councel-details/councel-details.component';
import { PetitionerDetailsComponent } from './Master/petitioner-details/petitioner-details.component';
import { RespondentDetailsComponent } from './Master/respondent-details/respondent-details.component';
import { RepresentingDetailsComponent } from './Master/representing-details/representing-details.component';
import { DepartmentWiseReportComponent } from './Report/department-wise-report/department-wise-report.component';
import { DistrictWiseReportComponent } from './Report/district-wise-report/district-wise-report.component';
import { YearWiseReportComponent } from './Report/year-wise-report/year-wise-report.component';
import { CourtWiseReportComponent } from './Report/court-wise-report/court-wise-report.component';
import { GovtSectionWiseReportComponent } from './Report/govt-section-wise-report/govt-section-wise-report.component';
import { CaseDetailsComponent } from './admin-onboard/case-details/case-details.component';
import { CaseTaskListComponent } from './Master/case-task-list/case-task-list.component';
import { CaseTaskUpdateComponent } from './Master/case-task-update/case-task-update.component';
import { ExpectedActionTypeAddComponent } from './Master/expected-action-type-add/expected-action-type-add.component';
import { ExpectedActionTypeListComponent } from './Master/expected-action-type-list/expected-action-type-list.component';
import { ExpectedActionTypeUpdateComponent } from './Master/expected-action-type-update/expected-action-type-update.component';


import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CaseDetailsUpdateComponent } from './admin-onboard/case-details-update/case-details-update.component';
import { CaseDocumentUpdateComponent } from './Master/case-document-update/case-document-update.component';

import { AddUserComponent } from './users-role/add-user/add-user.component';
import { ListUserComponent } from './users-role/list-user/list-user.component';
import { UpdateUserComponent } from './users-role/update-user/update-user.component';
import { TaskTypeAddComponent } from './Master/task-type-add/task-type-add.component';
import { TaskTypeListComponent } from './Master/task-type-list/task-type-list.component';
import { TaskTypeUpdateComponent } from './Master/task-type-update/task-type-update.component';
import { CaseDocumentListComponent } from './Master/case-document-list/case-document-list.component';
import { ChartsModule } from 'ng2-charts';
import { CaseTimelineComponent } from './admin-onboard/case-timeline/case-timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    ListviewComponent,
    FormviewComponent,
    HeaderComponent,
    SidenavComponent,
    Listview2Component,
    Formview2Component,
    AddCaseComponent,
    CaseListComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DepartmentAddComponent,
    CourtAddComponent,
    CourtListComponent,
    DepartmentListComponent,
    UnitListComponent,
    UnitAddComponent,
    HoSectionListComponent,
    HoSectionAddComponent,
    OrgnaisationAddComponent,
    OrgnaisationListComponent,
    GovtSectionListComponent,
    GovtSectionAddComponent,
    CEAddComponent,
    CEListComponent,
    SEListComponent,
    SEAddComponent,
    EEAddComponent,
    EEListComponent,
    CaseTypeListComponent,
    CaseTypeAddComponent,
    CaseStatusAddComponent,
    CaseStatusListComponent,
    CaseClassificationListComponent,
    CaseClassificationAddComponent,
    PetitionerListComponent,
    RespondentListComponent,
    RepresentingOfficerListComponent,
    CounselListComponent,
    ContemptListComponent,
    SubOrganaizationListComponent,
    SubOrganaizationAddComponent,
    UpdateCaseComponent,
    CaseSubjectListComponent,
    CaseSubjectAddComponent,
    HoSectionUpdateComponent,
    GovtSectionUpdateComponent,
    CourtUpdateComponent,
    OrganizationUpdateComponent,
    SubOrganizationUpdateComponent,
    SeUpdateComponent,
    EeUpdateComponent,
    CaseTypeUpdateComponent,
    CaseStatusUpdateComponent,
    CaseSubjectUpdateComponent,
    CaseClassificationUpdateComponent,
    PetitionerUpdateComponent,
    CouncelUpdateComponent,
    RespondentUpdateComponent,
    CouncelDetailsComponent,
    PetitionerDetailsComponent,
    RespondentDetailsComponent,
    RepresentingDetailsComponent,
    DepartmentWiseReportComponent,
    DistrictWiseReportComponent,
    YearWiseReportComponent,
    CourtWiseReportComponent,
    GovtSectionWiseReportComponent,
    CaseDetailsComponent,
    CaseTaskListComponent,
    CaseTaskUpdateComponent,
    ExpectedActionTypeAddComponent,
    ExpectedActionTypeListComponent,
    ExpectedActionTypeUpdateComponent,
    CaseDetailsUpdateComponent,
    CaseDocumentUpdateComponent,
    AddUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    TaskTypeAddComponent,
    TaskTypeListComponent,
    TaskTypeUpdateComponent,
    CaseDocumentListComponent,
    CaseTimelineComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RecaptchaModule,
    QRCodeModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    MatSelectFilterModule,
    DataTablesModule,
    NgxMatSelectSearchModule,
    DropDownListModule,
    ChartsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

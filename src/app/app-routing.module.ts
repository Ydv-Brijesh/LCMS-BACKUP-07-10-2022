import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './admin-onboard/dashboard/dashboard.component';
import { FormviewComponent } from './formview/formview.component';
import { ListviewComponent } from './listview/listview.component';
import { Listview2Component } from './listview2/listview2.component';
import { Formview2Component } from './formview2/formview2.component';
import { AgencyComponentComponent } from './admin-onboard/dashboard/system-configuration/agency-component/agency-component.component';
import { DesignationComponent } from './admin-onboard/dashboard/system-configuration/designation/designation.component';
import { OfficeComponent } from './admin-onboard/dashboard/system-configuration/office/office.component';
import { OfficerComponent } from './admin-onboard/dashboard/system-configuration/officer/officer.component';
import { SchemeComponent } from './admin-onboard/dashboard/system-configuration/scheme/scheme.component';
import { VendorServiceComponent } from './admin-onboard/dashboard/system-configuration/vendor-service/vendor-service.component';
import { VendorTypeComponent } from './admin-onboard/dashboard/system-configuration/vendor-type/vendor-type.component';
import { BanksComponent } from './admin-onboard/dashboard/system-configuration/banks/banks.component';
import { LimitSettingComponent } from './admin-onboard/dashboard/system-configuration/limit-setting/limit-setting.component';
import { CaseListComponent } from './admin-onboard/case-list/case-list.component';
import { AddCaseComponent } from './admin-onboard/add-case/add-case.component';
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

import { CaseSubjectListComponent } from './Master/case-subject-list/case-subject-list.component';
import { CaseSubjectAddComponent } from './Master/case-subject-add/case-subject-add.component';

import { HoSectionUpdateComponent } from './Master/ho-section-update/ho-section-update.component';
import { GovtSectionUpdateComponent } from './Master/govt-section-update/govt-section-update.component';
import { CourtUpdateComponent } from './Master/court-update/court-update.component';
import { OrganizationUpdateComponent } from './Master/organization-update/organization-update.component';
import { SubOrganizationUpdateComponent } from './Master/sub-organization-update/sub-organization-update.component';
import { SeUpdateComponent } from './Master/se-update/se-update.component';
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

import { CaseDetailsUpdateComponent } from './admin-onboard/case-details-update/case-details-update.component';
import { CaseDocumentUpdateComponent } from './Master/case-document-update/case-document-update.component';

import { AddUserComponent } from './users-role/add-user/add-user.component';
import { ListUserComponent } from './users-role/list-user/list-user.component';
import { UpdateUserComponent } from './users-role/update-user/update-user.component';

import { TaskTypeAddComponent } from './Master/task-type-add/task-type-add.component';
import { TaskTypeListComponent } from './Master/task-type-list/task-type-list.component';
import { TaskTypeUpdateComponent } from './Master/task-type-update/task-type-update.component';

import { CaseDocumentListComponent } from './Master/case-document-list/case-document-list.component';
import { CaseTimelineComponent } from './admin-onboard/case-timeline/case-timeline.component';
const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {  path: '',
        loadChildren: () => import('./admin-onboard/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
      ]
     
  },
  { path: 'list', component: ListviewComponent },
  { path: 'form', component: FormviewComponent },
  { path: 'list2', component: Listview2Component },
  { path: 'form2', component: Formview2Component },

  { path: 'add-case', component: AddCaseComponent },
  { path: 'case-list', component: CaseListComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:id', component: ResetPasswordComponent },
  { path: 'department-add', component: DepartmentAddComponent },
  { path: 'court-add', component: CourtAddComponent },
  { path: 'court-list', component: CourtListComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'unit-list', component: UnitListComponent },
  { path: 'unit-add', component: UnitAddComponent },
  { path: 'ho-section-add', component: HoSectionAddComponent },
  { path: 'ho-section-list', component: HoSectionListComponent },
  { path: 'orgnaisation-add', component: OrgnaisationAddComponent },
  { path: 'orgnaisation-list', component: OrgnaisationListComponent },
  { path: 'govt-section-add', component: GovtSectionAddComponent },
  { path: 'govt-section-list', component: GovtSectionListComponent },
  { path: 'ce-add', component: CEAddComponent },
  { path: 'ce-list', component: CEListComponent },
  { path: 'se-list', component: SEListComponent },
  { path: 'se-add', component: SEAddComponent },
  { path: 'ee-add', component: EEAddComponent },
  { path: 'ee-list', component: EEListComponent },
  { path: 'case-type-add', component: CaseTypeAddComponent },
  { path: 'case-type-list', component: CaseTypeListComponent },

  { path: 'case-status-add', component: CaseStatusAddComponent },
  { path: 'case-status-list', component: CaseStatusListComponent },
  { path: 'case-classification-add', component: CaseClassificationAddComponent },
  { path: 'case-classification-list', component: CaseClassificationListComponent },

  { path: 'petitioner-list', component: PetitionerListComponent },
  { path: 'respondent-list', component: RespondentListComponent },
  { path: 'representing-officer-list', component: RepresentingOfficerListComponent },
  { path: 'counsel-list', component: CounselListComponent },
  { path: 'contempt-list', component: ContemptListComponent },

  { path: 'sub-org-list', component: SubOrganaizationListComponent },
  { path: 'sub-org-add', component: SubOrganaizationAddComponent },
  
  { path: 'case-update/:id', component: UpdateCaseComponent },
  { path: 'case-subject-list', component: CaseSubjectListComponent },
  { path: 'case-subject-add', component: CaseSubjectAddComponent },
  
  { path: 'ho-update/:id', component: HoSectionUpdateComponent },
  { path: 'govt-section-update/:id', component: GovtSectionUpdateComponent },
  { path: 'court-update/:id', component: CourtUpdateComponent },
  { path: 'org-update/:id', component: OrganizationUpdateComponent },
  { path: 'sub-org-update/:id', component: SubOrganizationUpdateComponent },
  { path: 'se-update/:id', component: SeUpdateComponent },
  { path: 'ee-update/:id', component: EeUpdateComponent },
  { path: 'case-type-update/:id', component: CaseTypeUpdateComponent },
  { path: 'case-status-update/:id', component: CaseStatusUpdateComponent },
  { path: 'case-subject-update/:id', component: CaseSubjectUpdateComponent },
  { path: 'case-classification-update/:id', component: CaseClassificationUpdateComponent },
  { path: 'petitioner-update/:id', component: PetitionerUpdateComponent },
  { path: 'councel-update/:id', component: CouncelUpdateComponent },
  { path: 'respondent-update/:id', component: RespondentUpdateComponent },


  { path: 'councel-details/:id', component: CouncelDetailsComponent },
  { path: 'petitioner-details/:id', component: PetitionerDetailsComponent },
  { path: 'respondent-details/:id', component: RespondentDetailsComponent },
  { path: 'representing-details/:id', component: RepresentingDetailsComponent },

  { path: 'department-wise-report', component: DepartmentWiseReportComponent },
  { path: 'district-wise-report', component: DistrictWiseReportComponent },
  { path: 'year-wise-report', component: YearWiseReportComponent },
  { path: 'court-wise-report', component: CourtWiseReportComponent },
  { path: 'govt-section-wise-report', component: GovtSectionWiseReportComponent },

  { path: 'case-details', component: CaseDetailsComponent },

  { path: 'case-task-list', component: CaseTaskListComponent },
  { path: 'case-task-update/:id', component: CaseTaskUpdateComponent },

  { path: 'expected-action-add', component: ExpectedActionTypeAddComponent },
  { path: 'expected-action-list', component: ExpectedActionTypeListComponent },
  { path: 'expected-action-update/:id', component: ExpectedActionTypeUpdateComponent },
  { path: 'case-details-update/:id', component: CaseDetailsUpdateComponent },
  { path: 'case-document-update/:id', component: CaseDocumentUpdateComponent },

  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },

  { path: 'task-type-add', component: TaskTypeAddComponent },
  { path: 'task-type-list', component: TaskTypeListComponent },
  { path: 'task-type-update/:id', component: TaskTypeUpdateComponent },

  { path: 'case-document-list', component: CaseDocumentListComponent },
  { path: 'case-timeline', component: CaseTimelineComponent },

  {
     path: '**',
     redirectTo:''
  },
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

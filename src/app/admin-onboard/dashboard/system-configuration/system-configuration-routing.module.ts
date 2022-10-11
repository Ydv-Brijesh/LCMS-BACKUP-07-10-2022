import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'scheme',
    loadChildren: () => import('./scheme/scheme.module').then(m => m.SchemeModule)
  },
  {
    path: 'office',
    loadChildren: () => import('./office/office.module').then(m => m.OfficeModule)
  },
  {
    path: 'designation',
    loadChildren: () => import('./designation/designation.module').then(m => m.DesignationModule)
  },
  {
    path: 'officer',
    loadChildren: () => import('./officer/officer.module').then(m => m.OfficerModule)
  },
  {
    path: 'vendorType',
    loadChildren: () => import('./vendor-type/vendor-type.module').then(m => m.VendorTypeModule)
  },
  {
    path: 'vendorService',
    loadChildren: () => import('./vendor-service/vendor-service.module').then(m => m.VendorServiceModule)
  },
  {
    path: 'agencyComponent',
    loadChildren: () => import('./agency-component/agency-component.module').then(m => m.AgencyComponentModule)
  },
  {
    path: 'bank',
    loadChildren: () => import('./banks/banks.module').then(m => m.BanksModule)
  },
  {
    path: 'limitSetting',
    loadChildren: () => import('./limit-setting/limit-setting.module').then(m => m.LimitSettingModule)
  },
  {
    path: 'beneficiaryMaster',
    loadChildren: () => import('./beneficiary-master/beneficiary-master.module').then(m => m.BeneficiaryMasterModule)
  },
  {
    path: 'demandRequests',
    loadChildren: () => import('./demand-requests/demand-requests.module').then(m => m.DemandRequestsModule)
  },
  {
    path: 'disitrictMaster',
    loadChildren: () => import('./district-master/district-master.module').then(m => m.DistrictMasterModule)
  },
  {
    path: 'ifscMaster',
    loadChildren: () => import('./ifsc-master/ifsc-master.module').then(m => m.IfscMasterModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemConfigurationRoutingModule { }

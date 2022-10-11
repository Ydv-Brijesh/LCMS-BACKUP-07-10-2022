import { EventEmitter, Injectable } from '@angular/core';
import { Agency, Bank, Beneficiary, Designation, Office, Officer, Scheme, SchemeLimitSetting, Vendor, VendorService, VendorType } from './data.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  officeChange= new EventEmitter<Office[]>()
private office:Office[]=[
  new Office(
    'SMMU',
  'UPSRLM HO',
  'Head Office'
  ,9889783846,
  'Shri  Aakesh  Yadav',
  'Accounts Officer',
  'test1@gmail.com',
  9090909090,
  '09ABCDR4525J2QA',
  'SFSFW2456F',
  'Shri  Aakesh  Yadav',
  9090909090,
  'test1@gmail.com'),
  new Office(
    'DMMU',
  'UPSRLM DO',
  'Varanasi District Office '
  ,9869824698,
  'Mr. Chandran Singh ',
  'Accounts Officer',
  't1@gmail.com',
  6056239841,
  '09ABCDR4525J2QA',
  'SFSFW2456F',
  'Dr. Chaitanya Singh ',
  8632597410,
  't1@gmail.com'),
  new Office(
    'BMMU',
  'UPSRLM BO',
  'Varanasi Block Office'
  ,7863249965,
  'Mr. Chandran Singh ',
  'Administration Head',
  'test3@gmail.com',
  8181818181,
  '09ABCDR4525J2QA',
  'SFSFW2456F',
  'Dr. Darsh Gupta',
  7512369840,
  't4@gmail.com')
  ]
  officerChange = new EventEmitter<Officer[]>()
  private officer: Officer[] = [

    new Officer('Mr. Aakav Joshi', '03/02/1967', 'Male', 'Shri Vivek Chandra Joshi', 911645623009, 'ABCTY1234D', 9090909090, 'test@gmail.com'),
    new Officer('Shri  Aakesh  Yadav ', '03/15/1987', 'Male', 'Shri Satyaprakash Yadav', 911745623010, 'BCDXA2133S', 8181818181, 'test1@gmail.com'),
    new Officer('Mr.Aarav Gupta', '04/25/1989', 'Male', 'Shri Om Anand Gupta', 911845623011, 'ABCTY1234e', 6056239841, 'test2@gmail.com'),
    new Officer('Shri Advik Joshi', '02/05/1987', 'Male', 'Shri Balram Dev', 911945623012, 'BPDXA2133S', 7512369840, 'test3@gmail.com'),
    new Officer('Dr. Chaitanya Singh', '06/19/1978', 'Male', 'Shri Monu Singh', 912045623013, 'ABCTY5634D', 8632597410, 't1@gmail.com')

]
BeneficiaryChange= new EventEmitter<Beneficiary[]>()
private Beneficiary: Beneficiary[]=[
  new Beneficiary('07/04/2022','kuldeep','1334gh',0.187,14250000,'2664750','018259','12/02/2022','26710'),
  new Beneficiary('07/04/2022','Mayawati','1118gh',0.007,6375000,'19125','018261','12/02/2022','450'),
  new Beneficiary('07/04/2022','shambhu sharan','1183gh',0.0372,6375000,'19125','018262','12/02/2022','2440'),
  new Beneficiary('07/04/2022','Gopali','1086gh',0.057,6375000,'0','018263','12/02/2022','3700')
]

designationChange= new EventEmitter<Designation[]>()
private designation:Designation[]=[
  new Designation('Managing Director', 'Shri Rampal Singh'),
  new Designation('Chief Financial Officer', 'Shri Mayank Gaur'),
  new Designation('Accounts Officer', 'Shrimati Anuradha Singh'),
  new Designation('Administration Head', 'Shri Ganesh Sharma'),
  new Designation('District Officer', 'Shri Hassan Khan'),
  new Designation('Block Officer', 'Shri Gurdeep Singh'),
  new Designation('Shri Gurdeep Singh', 'Shri Gurdeep Singh'),
  new Designation('Manager', 'Shri Rajneesh Singh'),
  new Designation('Shri Rajneesh Singh', 'Shrimati Rajni'),
  new Designation('HR', 'Shri Veer Singh'),
  new Designation('neAccountantw', 'Shri Rohan Pal')
]
  vendorTypeChange = new EventEmitter<VendorType[]>()
  private vendorType: VendorType[] = [
    new VendorType('1', 'SHG', 'Self Help Groups'),
    new VendorType('2', 'SRP', 'Stat Resource Person'),
    new VendorType('3', 'DRP', 'District Resource Person'),
    new VendorType('4', 'BRP', 'Block Resource Person'),
    new VendorType('5', 'Bank Sakhi', 'Bank Sakhi Manday Payment'),
    new VendorType('6', 'ICRP', 'ICRP Payments'),
    new VendorType('7', 'External Party', 'External Vendor'),
  ]

  vendorServiceChange = new EventEmitter<VendorService[]>()
  private vendorService: VendorService[] = [
    new VendorService('1', 'TAXI', 'Taxi Booking Services'),
    new VendorService('2', 'TENT', 'Taxi Booking Services'),
    new VendorService('3', 'LODGING', 'Lodging Facilities'),
    new VendorService('4', 'FOODING', 'Fooding Facilities'),
    new VendorService('5', 'TRAIN BOOKING', 'Train Ticket Booing Services'),
    new VendorService('6', 'AIR TICKET BOOKING', 'Air Ticket Booking Services'),
  ]

  vendorChange = new EventEmitter<Vendor[]>()
  private vendor: Vendor[] = [
    new Vendor('External Party', 'TAXI', 'Local Travel', 'Hello Taxi Service', '03/02/1967', 'SDFASF3243F', '09JSDFJ2345D1DD', '0974 7868 7868', '', '', '', '987923479', '687687996', 't1@gmail.com', 'AXIS BANK', 'AXI236548D', '9170100000000319'),
  ]

  agencyChange = new EventEmitter<Agency[]>()
  private agency: Agency[] = [
    new Agency('1', 'Improving Quality & Equity in Focus States'),
    new Agency('2.1', 'System Level Strengthening'),
    new Agency('1.3.3.5', 'Hiring of vehicles'),
    new Agency('1.3.2.9', 'Management capacity development'),
    new Agency('2.2.1', 'Operating Costs : National Project Implementation Unit (NPIU)'),
    new Agency('2.2.1.4', 'Operation and maintenance of equipments'),

  ]
  bankChange = new EventEmitter<Bank[]>()
  private bank: Bank[] = [
    new Bank('Andhra Bank'),
    new Bank('BANK OF BARODA'),
    new Bank('Bank Of Maharashtra'),
    new Bank('Central Bank Of India'),
    new Bank('Dena Bank'),
    new Bank('ICICI Bank'),
    new Bank('Indian overseas bank'),
    new Bank('IDBI Bank'),

  ]
  schemeLimitSettingChange = new EventEmitter<SchemeLimitSetting[]>()
  private schemeLimitSetting: SchemeLimitSetting[] = [
    new SchemeLimitSetting('NRLM', 'UP175', 'abcd', 'abcd', 'All Districts', '234,251,250.00', '163,975,875.00', '70,275,375.00'),
    new SchemeLimitSetting('RSETI', 'UP172', 'abcd', 'abcd', 'All Districts', '235,878,728.00', '165,115,109.60', '70,763,618.40'),
    new SchemeLimitSetting('MKSP', 'UP171', 'abcd', 'abcd', 'All Districts', '67,457,456.00', '47,220,219.20', '20,237,236.80'),
    new SchemeLimitSetting('SVEP', 'UP174', 'abcd', 'abcd', 'All Districts', '1,641,343.20', '163,975,875.00', '703,432.80'),
  ]
  schemeChange = new EventEmitter<Scheme[]>()
  private scheme: Scheme[] = [
    new Scheme('NNRETP-A', 'NRETP', 'Institutional and Human Capacity Building [UP]', 'Workshop / Training', 'Administration Expenses'),
    new Scheme('A1', 'NRETP', 'Technical Assistance [UP]', 'Workshop / Training', 'Workshop / Training'),
    new Scheme('A1.1', 'NRETP', 'Multi-state Trainings, Consultations, Workshops etc and other Demand driven TA [UP]', 'Workshop / Training', 'Resource Person'),
    new Scheme('A1.2', 'NRETP', 'abNational Resource Organization [UP]', 'Workshop / Training', 'Cadre Payment'),
  ]


  constructor() { }
  getdesignation(){
    return this.designation.slice();
  }
  addnewdesignation(designation:Designation[]){

    this.designation = designation.concat(this.designation)
    console.log(this.designation); 
    this.designationChange.emit(this.designation.slice());
  }
  getoffice(){
    return this.office.slice();
  }
  addnewOffice(office:Office[]){
    this.office = office.concat(this.office) 
    this.officeChange.emit(this.office.slice());
  }
  getofficer() {
    return this.officer.slice();
  }
  addnewOfficer(officer: Officer[]) {
    this.officer = officer.concat(this.officer)
    this.officerChange.emit(this.officer.slice());
  }
  getBeneficiary(){
    return this.Beneficiary.slice();
  }
 addBeneficiary(beneficiary:Beneficiary[]){
   this.Beneficiary= beneficiary.concat(this.Beneficiary)
    return this.Beneficiary.slice();
  }


  getVendorType() {
    return this.vendorType.slice();
  }
  addnewVendorType(vendorType: VendorType[]) {
    this.vendorType = vendorType.concat(this.vendorType)
    this.vendorTypeChange.emit(this.vendorType.slice());
  }

  getVendor() {
    return this.vendor.slice();
  }
  addnewVendor(vendor: Vendor[]) {
    this.vendor = vendor.concat(this.vendor)
    this.vendorChange.emit(this.vendor.slice());
  }

  getVendorService() {
    return this.vendorService.slice();
  }
  addnewVendorService(vendorService: VendorService[]) {
    this.vendorService = vendorService.concat(this.vendorService)
    this.vendorServiceChange.emit(this.vendorService.slice());
  }
  getAgency() {
    return this.agency.slice();
  }
  addnewAgency(agency: Agency[]) {
    this.agency = agency.concat(this.agency)
    this.agencyChange.emit(this.agency.slice());
  }

  getBank() {
    return this.bank.slice();
  }
  addnewBank(bank: Bank[]) {
    this.bank = bank.concat(this.bank)
    this.bankChange.emit(this.bank.slice());
  }

  getschemeLimit() {
    return this.schemeLimitSetting.slice();
  }
  addnewschemeLimit(schemeLimit: SchemeLimitSetting[]) {
    this.schemeLimitSetting = schemeLimit.concat(this.schemeLimitSetting)
    this.schemeLimitSettingChange.emit(this.schemeLimitSetting)
  }

  getscheme() {
    return this.scheme.slice();
  }
  addnewscheme(scheme: Scheme[]) {
    this.scheme = scheme.concat(this.scheme)
    this.schemeChange.emit(this.scheme)
  }
}

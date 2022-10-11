import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  beneficiary:UntypedFormGroup;

  
  constructor( private fb:UntypedFormBuilder,
    private router: Router,
    private data: DataService,
    private toster: ToasterService){
      this.beneficiary=this.fb.group({
        date:[''],
        referenceNo:[''],
        user:[''],
        beneficiary:[''],
        beneficiaryName:[''],
        gataNumber:[''],
        rakba:[''],
        pratifalRate:[''],
        beneficaryShare:[''],
        chequeNumber:[''],
        chequeDate:[''],
        registrationAmount:[''],
        remark:['']
      })
    }

  ngOnInit(): void {
  }
  
  onSubmit() {console.log(this.beneficiary);
    // let date=this.beneficiary.value.data.toString()
    const beneficiary=[new Beneficiary(
      this.beneficiary.value.date,
      this.beneficiary.value.beneficiaryName,
       this.beneficiary.value.gataNumber,
        this.beneficiary.value.rakba, 
        this.beneficiary.value.pratifalRate,
        this.beneficiary.value.beneficaryShare,
         this.beneficiary.value.chequeNumber, 
         this.beneficiary.value.chequeDate, 
         this.beneficiary.value.registrationAmount)]
         

         
         this.data.addBeneficiary(beneficiary)
         this.router.navigate(['/dashboard/beneficiary/beneficiariesList'])
  
  }

  cancel() {
    this.router.navigate(['/dashboard/beneficiary/beneficiariesList'])

}
}

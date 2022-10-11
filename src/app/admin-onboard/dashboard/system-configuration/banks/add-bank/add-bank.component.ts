import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
  bankForm: UntypedFormGroup
  constructor(private formBuilder: UntypedFormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.bankForm = this.formBuilder.group({
      bankName: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newbank = [new Bank(
      this.bankForm.value.bankName,
    )]
    this.data.addnewBank(newbank)
    this.toster.showSuccess('New Bank  Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/bank'])

  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/bank'])
  }
}

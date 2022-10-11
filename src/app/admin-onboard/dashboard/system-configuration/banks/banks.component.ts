import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  bank!: Bank[];
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.bank = this.data.getBank()
    this.data.bankChange.subscribe((bank: Bank[]) => {
      this.bank = bank
    })   
  }
  addNewbank() {
    this.router.navigate(['/dashboard/system-configuration/bank/add'])
  }
}
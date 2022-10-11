import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeLimitSetting } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-limit-setting',
  templateUrl: './limit-setting.component.html',
  styleUrls: ['./limit-setting.component.css']
})
export class LimitSettingComponent implements OnInit {
  limitSetting: any
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.limitSetting = this.data.getschemeLimit()
    console.log(this.limitSetting);
    this.data.schemeLimitSettingChange.subscribe((limitSetting: SchemeLimitSetting[]) => {
      this.limitSetting = limitSetting
      console.log(limitSetting);

    })
  }
  addlimit() {
    this.router.navigate(['/dashboard/system-configuration/limitSetting/add'])
  }

}

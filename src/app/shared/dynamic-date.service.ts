import { Injectable } from '@angular/core';
import { interval, timer } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DynamicDateService {
date= new Date();
  constructor() { }
  getDate() {
    return timer(1000, 5000).pipe(map((_) => this.getDateTime()));
  }

  private getDateTime() {
    this.date.setSeconds(this.date.getSeconds() + 1);
    return (
      this.date.getHours() +
      ':' +
      this.date.getMinutes() +
      ':' +
      this.date.getSeconds()
    );
  }

}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

 
  ngToastr:any;
  constructor(private toastr: ToastrService) { }

  showSuccess(message:string){
    this.toastr.success(message)
    console.log(message)
}

showSuccessMsg(message:string){
  this.toastr.success(message)
  console.log(message)
  this.ngToastr.options = {
    "timeOut": "5000",
}
}

showError(message:string){
    this.toastr.error(message)
    console.log(message)
}

showInfo(message:string){
    this.toastr.info(message)
}

showWarning(message:string){
    this.toastr.warning(message)
}
}

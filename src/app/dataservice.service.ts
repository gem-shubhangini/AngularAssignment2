import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 message:any;
 techvalues:string[]=[];
  constructor() { }

  setdata(data:any){
    this.message=data;
  }
  setvalues(value:string[]){
    this.techvalues=value
  }

  getvalues(){
    return this.techvalues;
  }
  getdata(){
    return this.message
  }
}

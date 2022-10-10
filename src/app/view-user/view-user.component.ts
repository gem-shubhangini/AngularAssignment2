import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
var  data: any[]=[];
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})

export class ViewUserComponent implements OnInit {

  constructor(private shared:DataserviceService) { }
  message:any;
  tech:string[]=[]
  data=data;
  ngOnInit(): void {
   this.message= this.shared.getdata()
  this.tech =this.shared.getvalues()
      this.message.Tech=this.tech; 
     data.push(this.message);
     console.log("data",data);
  }
  

}

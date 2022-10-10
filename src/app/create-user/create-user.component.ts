import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray,FormControl } from '@angular/forms';
import {DataserviceService} from '../dataservice.service'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})



export class CreateUserComponent implements OnInit {
  public techs: Array<string> = ['Javascript','C','C++','Java','Python'];

  TechError: Boolean = true;
  selectedtechValues:string[] = [];
  profileForm:FormGroup =this._fb.group({
    name: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*$'),Validators.minLength(2),Validators.maxLength(30)]],
    Email: ['',[Validators.required,Validators.email]],
    MobileNo: ['',[Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]],
    gender: ['',Validators.required],
    category: ['',Validators.required],
    Technology: this.addTechControl(),
    Image:['']

  });
  word:any;
  data:any;
  showclass="hide";
  imagePath: any;
  url: string | ArrayBuffer | null | undefined;
  
  constructor(private _fb: FormBuilder,private shared:DataserviceService) { }
    formModal:any

  ngOnInit(): void {
  
  
  }
  addTechControl(){
     const arr = this.techs.map((element)=>{
      return this._fb.control(false);
     })
     return this._fb.array(arr);
  }
  get TechArray() {
    return <FormArray>this.profileForm.get('Technology');
  }

  onFileChanged(event:any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.word = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
    console.warn("url",this.url)
}


  checkTechControlsTouched() {
    let flg = false;
    this.TechArray.controls.forEach(control => {
      if (control.touched) {
        flg = true;
      }
    });

    return flg;
  }

  getSelectedTechValue() {
    this.selectedtechValues = [];
    this.TechArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedtechValues.push(this.techs[i]);
      }
    });
     console.log(this.selectedtechValues)
    this.TechError =  this.selectedtechValues.length > 0 ? false : true;
  }
  onSubmit(){
    if(!this.profileForm.valid) {
      this.profileForm.markAllAsTouched();
      this.showclass="hide";
    }
    else{
      this.showclass="show";
     
      this.data=this.profileForm.value;
      console.log(this.data.name);
    }
  }

  onclose(){
    this.showclass="hide";
    this.profileForm.reset();
  }
  save(){
    this.data.url=this.url;
     this.shared.setdata(this.data)
     this.shared.setvalues(this.selectedtechValues)
     this.profileForm.reset();
    this.showclass="hide";
  }
}

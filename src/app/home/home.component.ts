import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountOpenForm:FormGroup;
  firstcompleted:boolean=false
  submittedFirst:boolean=false;
  submittedSecond:boolean=false;
  transactionSummaryList:any;=[];
  constructor(public fb:FormBuilder) { }

  ngOnInit() {
    this.accountOpenForm=this.fb.group({
        name: ["",Validators.required],
        surname: ["",Validators.required],
        birthdate: ["",Validators.required],
        nationality: ["",Validators.required],
        email: ["", Validators.compose([Validators.required,Validators.email])],
        phone:["",Validators.required],
        id:["",Validators.required],
        city:["",Validators.required],
        street:["",Validators.required],
        address:["",Validators.required],
        pincode:["",Validators.required]

      })


  }
  onSubmit(){
    this.submittedFirst=true;
    if(this.accountOpenForm.controls.name.value!=""&&
    this.accountOpenForm.controls.surname.value!=""&&
    this.accountOpenForm.controls.birthdate.value!=""&&
    this.accountOpenForm.controls.nationality.value!=""&&
    this.accountOpenForm.controls.email.value!=""&&
    this.accountOpenForm.controls.phone.value!=""){
      this.firstcompleted=true;
    }
    // if(this.submittedFirst&&this.firstcompleted ){
    //   if(this.accountOpenForm.controls.pincode.value==""||
    //     this.accountOpenForm.controls.id.value==""||
    //     this.accountOpenForm.controls.street.value==""||
    //     this.accountOpenForm.controls.city.value==""||
    //     this.accountOpenForm.controls.address.value==""
    //     ){
    //     this.submittedSecond=true;
    //   }
    //}
    if (this.accountOpenForm.invalid) {
      return;
    }else{

   alert(JSON.stringify(this.accountOpenForm.getRawValue()))

    }

  }
  get f() { return this.accountOpenForm.controls; }
}

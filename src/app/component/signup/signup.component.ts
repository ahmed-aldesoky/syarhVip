import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passValidation } from 'src/app/data/PasswordValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,
   private router:Router
     ) { }

  personalInfoForm= this.fb.group({
    name:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
    pass:['',[Validators.required]],
    confirmPass:['',[Validators.required]],

  },
  {validators:[passValidation]})

  get name(){
    return this.personalInfoForm.get('name')
  }
  get email(){
    return this.personalInfoForm.get('email')
  }
  get phone(){
    return this.personalInfoForm.get('phone')
  }
  get pass(){
    return this.personalInfoForm.get('pass')
  }
  get confirmPass(){
    return this.personalInfoForm.get('confirmPass')
  }
  
  ngOnInit(): void {  
  }
  
myData:any

submitData(){
  
  console.log(this.personalInfoForm);    
    // this.enrollService.enroll(myData).subscribe(
    //   response=>
    //   {
    //     if (this.personalInfoForm.valid) {
    //       console.log("success");
    //       this.toast.success({detail:"success Message", summary:"form are submitted", duration:5000});
    //       this.router.navigate(['/homePage'])
    //     }
    //     else{
    //     this.toast.error({detail:"faild Message", summary:"form aren't submitted", duration:5000});
    //     }
    //   },
    //   error=>
    //   {
    //     console.log(error);
    //   this.toast.error({detail:"faild Message", summary:"form aren't submitted", duration:5000});

        
    //   }
    // )
    }


}
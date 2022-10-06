import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }

  loginForm= this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]],
    pass:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
   
  })
  get email(){
    return this.loginForm.get('email')
  }
  get pass(){
    return this.loginForm.get('pass')
  }

  ngOnInit(): void {
  }

}
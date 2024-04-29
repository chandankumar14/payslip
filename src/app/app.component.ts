import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Acelucid';
  isLoggedIn: boolean = true
  userName: string = "acelucid"
  Password: string = "acelucid@123"
  loginForm!:FormGroup
  constructor(private router:Router){
    this.loginForm = new FormGroup ({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  ngOnInit(){
    
  }

  submit(){
   let pass = this.loginForm.controls['password'].value
    let user = this.loginForm.controls['username'].value
    if(this.Password==pass &&this.userName ==user){
     this.isLoggedIn = true
     this.router.navigateByUrl('/payslip')
    }
  }
}

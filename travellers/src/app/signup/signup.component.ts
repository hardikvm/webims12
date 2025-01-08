import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  isLogin:boolean=false
  iserror:boolean=false
  empName:any;
  password:any
  email:any

  constructor(private appserv:AppService , private router:Router){
    // this.appserv.getPosts().subscribe((res:any)=>{
    //   console.log("res is",res)
    // })
  }

  haveacc(val:any){
    this.isLogin=val
  }

  createAccount(){
    let data={
      name:this.empName,
      password:this.password,
      email:this.email
    }
    this.appserv.signUp(data).subscribe((res:any)=>{
      localStorage.setItem("token",res.token)

      this.router.navigate(['/bookings'])
    })
  }

  login(){
 let data={
      name:this.empName,
      password:this.password,
      email:this.email
    }
    this.appserv.login(data).subscribe((res:any)=>{
      if(res?.message){
        this.iserror=true;
      }else{
        localStorage.setItem("token",res.token)
        // console.log("res",res)
        this.router.navigate(['/bookings'])
      }
    })
  }
}

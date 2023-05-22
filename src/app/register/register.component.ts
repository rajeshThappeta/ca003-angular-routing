import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 constructor(private us:UserService,private router:Router){}

  userRegsiterForm:FormGroup;

    ngOnInit(){
      this.userRegsiterForm=new FormGroup({
        username:new FormControl(null),
        password:new FormControl(null),
        email:new FormControl(null)
      })
    }


    registerUser(){
      let userObj=this.userRegsiterForm.value;
        this.us.creatNewUser(userObj).subscribe({
          next:(res)=>{
           //navigate to login
           this.router.navigate(['/login'])
          },
          error:(err)=>{
            console.log("err in user registration",err)
          }
        })
    }
}

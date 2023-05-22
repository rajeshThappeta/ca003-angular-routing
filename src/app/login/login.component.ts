import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup;


  constructor(private router:Router,private us:UserService){}

    ngOnInit(){
      this.loginForm=new FormGroup({
        username:new FormControl(null),
        password:new FormControl(null)
      })
    }

    onLogin(){

      let userCredObj=this.loginForm.value;
        this.us.userLogin(userCredObj).subscribe({
          next:(res)=>{
            if(res.length===0){
              alert("Invalid username")
            }
            else{
              if(res[0].password===userCredObj.password){
                //navigate to user profile
                this.router.navigate(['/user-profile',userCredObj.username])
              }
              else{
                alert("Invalid password")
              }
            }
          },
          error:(err)=>{
            console.log("Err in user login",err)
          }
        })

    }
    
}

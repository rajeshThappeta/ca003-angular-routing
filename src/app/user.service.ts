import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  creatNewUser(userObj){
   return this.hc.post('http://localhost:3000/users',userObj)
  }

  userLogin(userCredentialsObject){
    return this.hc.get<UserCred[]>(`http://localhost:3000/users?username=${userCredentialsObject.username}`)
  }
}



export interface UserCred{
  username:string;
  password:string;
}
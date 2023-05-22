import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:string;
  //read url params
  constructor(private ac:ActivatedRoute){}

  ngOnInit(): void {
    this.username=this.ac.snapshot.paramMap.get('username')
  }
}

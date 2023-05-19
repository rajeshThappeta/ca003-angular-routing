import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  jsTechnologies=['react','angular','vue'];
  javaTechnologies=['servltes','jsp','spring']

  userSelectedTechList=[];

  techForm:FormGroup;

    ngOnInit(){
      this.techForm=new FormGroup({
        selectedTechnology:new FormControl(null)
      })
    }


    getUserSelection(){
      console.log(this.techForm.value)
      if(this.techForm.value.selectedTechnology==='javascript'){
          this.userSelectedTechList=this.jsTechnologies;
      }
      else{
        this.userSelectedTechList=this.javaTechnologies;
      }
    }
}

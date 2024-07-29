import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';


@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  model : any={};
  erorrMessage:string="";
  isValidFormUserName = false;
  isValidFormUserPassword = false;

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    debugger;
    this.model.ID = sessionStorage.getItem("ID");
    if(this.model.Password==undefined || this.model.Password=="")
    { 
      this.isValidFormUserPassword=true;
    }
    else if(this.model.ConfirmPassword==undefined || this.model.ConfirmPassword=="")
    {
    this.isValidFormUserPassword=true;
    }
    else
    {
      if(this.model.Password==this.model.ConfirmPassword)
      {
      this.isValidFormUserPassword = false;
      this.service.UpdatePassword(this.model)
      .subscribe({
        next: (data) =>{
          debugger;
          if(data.Status=="Success")
          {
            this.model.Password="";
            this.model.ConfirmPassword="";
             alert(" Password Changed Successfully");
          }
        },
        error: (e) => console.error(e)
      });
    }
    else
    {
     
        alert( "Password Missmatch ");
     
    }
  }
  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : any={};
  list: any = [
    {id:1, name: '----------Select----------'},
    {id:2, name: 'Admin'},
    {id:3, name: 'Staff'},
    {id:4, name: 'Farmers'}
  ];
  current = 1;
  selected = null;
  isValidFormUserType = false;
  isValidFormUserID = false;
  isValidFormUserPassword = false;
  errorMessage='';
  hlist:any[]=[]
  
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }
  login()
  {
  debugger;
  this.isValidFormUserType = false;
  this.isValidFormUserID = false;
  this.isValidFormUserPassword = false;
  if(this.current==1)
  {
    this.isValidFormUserType=true;
  }
  else if(this.model.ID==undefined||this.model.ID=="")
  {
  this.isValidFormUserID=true;
  }
  else if(this.model.Password==undefined||this.model.Password=="")
  {
    this.isValidFormUserPassword=true;
  }
  else
  {
  debugger;
  this.isValidFormUserType = false;
  this.isValidFormUserID = false;
  this.isValidFormUserPassword = false;
  if(this.current==2)
  {
    this.model.UserType="Admin";
  }
  else if(this.current==3)
  {
    this.model.UserType="Staff";
  }
  else if(this.current==4)
  {
    this.model.UserType="Farmers";
  }
  this.service.Login(this.model)
  .subscribe({
    next: (data) => {
  debugger;
  sessionStorage.setItem("ID",this.model.ID);
  if(data.Status=="Success")
  {
    if(this.current==2)
    {
      this.router.navigate(['/adashboard']);
    }
    else if(this.current==3)
    {
    this.router.navigate(['/sdashboard']);
   }
   else if(this.current==4)
    {
    this.router.navigate(['/fdashboard']);
   }
  }
   else
    {
    alert('Invalid ID/Password');
    }
      },
      error:(e)=>console.error(e)

  })
  }
  }
}
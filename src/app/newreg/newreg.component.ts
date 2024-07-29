import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';

@Component({
  selector: 'app-newreg',
  templateUrl: './newreg.component.html',
  styleUrls: ['./newreg.component.css']
})
export class NewregComponent implements OnInit {
  model : any={};
  errorMessage=""
  isValidFormFarmer = false;
  isValidFormAddress = false;
  isValidFormMobile = false;
  isValidFormEmail = false;
  isValidFormFarmerID = false;
  isValidFormPassword = false;
  hlist: any[] = [];
  
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {

    }
    
  onSubmit(){
    debugger;
    this.isValidFormFarmer = false;
    if(this.model.Farmer==undefined || this.model.Farmer=="")
    { 
      this.isValidFormFarmer=true;
    }
    else if(this.model.Address==undefined || this.model.Address=="")
    {
    this.isValidFormAddress=true;
    }
    else if(this.model.Mobile==undefined || this.model.Mobile=="")
    {
    this.isValidFormMobile=true;
    }
    else if(this.model.FarmerID==undefined || this.model.FarmerID=="")
    {
    this.isValidFormFarmerID=true;
    }
    else if(this.model.Password==undefined || this.model.Password=="")
    {
    this.isValidFormPassword=true;
    }
    else
    {
      this.isValidFormFarmer= false;
      this.isValidFormAddress = false;
      this.isValidFormMobile = false;
      this.isValidFormFarmerID = false;
      this.isValidFormPassword = false;
      this.service.AddFarmer(this.model)
.subscribe({
next:(result) =>{
debugger;
alert("Account Created Successfully") ;
this.router.navigate(['/login']);
            this.model.Farmer="";
            this.model.Address="";
            this.model.Mobile="";
            this.model.FarmerID="";
            this.model.Password="";
},
        error: (e) => console.error(e)
 
      });
    }
  }
}

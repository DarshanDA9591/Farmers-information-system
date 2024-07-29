import { Component, OnInit } from '@angular/core';
import { Model  } from '../model';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  model : any={};
  isValidFormStaff = false;
  isValidFormAddress = false;
  isValidFormMobile = false;
  isValidFormEmail = false;
  isValidFormRegion = false;
  selected=null
  rlist: any[] = [];
  stafflist: any[] = [];
  
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
      debugger
      this.service.GetRegion(this.model)
      .subscribe({
       next: (data) => {
       this.rlist = data as any[];
        },
        error: (e) => console.error(e)
      })

    }
    
  onSubmit(){
    debugger;
    this.isValidFormRegion = false;
    this.model.RID=this.selected;
    if(this.model.RID==undefined || this.model.RID=="")
    { 
      this.isValidFormRegion=true;
    }
    else if(this.model.Staff==undefined || this.model.Staff=="")
    { 
      this.isValidFormStaff=true;
    }
    else if(this.model.Email==undefined || this.model.Email=="")
    {
    this.isValidFormEmail=true;
    }
    else if(this.model.Mobile==undefined || this.model.Mobile=="")
    {
    this.isValidFormMobile=true;
    }
    else if(this.model.Address==undefined || this.model.Address=="")
    {
    this.isValidFormAddress=true;
    }
    else
    {
      this.isValidFormStaff= false;
      this.isValidFormEmail = false;
      this.isValidFormMobile = false;
      this.isValidFormAddress = false;
      this.service.AddStaff(this.model)
.subscribe({
next:(result) =>{
debugger;
alert("Staff added successfully") ;
            this.selected="";
            this.model.Staff="";
            this.model.Email="";
            this.model.Mobile="";
            this.model.Address="";
},
        error: (e) => console.error(e)
 
      });
      debugger
      this.service.GetStaff(this.model)
      .subscribe({
       next: (data) => {
       this.stafflist = data as any[];
        },
        error: (e) => console.error(e)
      })
    }
  }
}



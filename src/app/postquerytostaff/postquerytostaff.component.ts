import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Model } from '../model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postquerytostaff',
  templateUrl: './postquerytostaff.component.html',
  styleUrls: ['./postquerytostaff.component.css']
})
export class PostquerytostaffComponent implements OnInit {
  model : any={};
  selected = null;
  isValidFormRegion = false;
  isValidFormFarmer = false;
  isValidFormMobile = false;
  isValidFormQuestion = false;

  rlist: any[] = []
  replylist: any[]=[]

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.GetRegion(this.model)
    .subscribe({
     next: (data) => {
     this.rlist = data as any[];
      },
      error: (e) => console.error(e)
    })
   this.model.FarmerID = sessionStorage.getItem("ID"); 
    this.service.GetReply(this.model)
      .subscribe({
      next: (data) => {
        this.model.FarmerID = sessionStorage.getItem("ID"); 
      this.replylist = data as any[];
        },
        error: (e) => console.error(e)
        })
      }
    
  onSubmit(){
    this.isValidFormRegion=false;
    this.model.RID=this.selected;
    if(this.model.RID==undefined || this.model.RID=="")
    { 
      this.isValidFormRegion=true;
    }
    else if(this.model.QQuestion==undefined || this.model.QQuestion=="")
    {
    this.isValidFormQuestion=true;
    }
    else
    {
      this.isValidFormRegion= false;
      this.isValidFormQuestion = false;
      this.model.FarmerID = sessionStorage.getItem("ID")
      this.service.PostQuery(this.model)
      .subscribe({
      next:(result) =>{  
      debugger;
      alert("Sent Successfully")
                  this.selected="";
                  this.model.QQuestion="";
      },
        error: (e) => console.error(e)
 
      });
    }
  }
}
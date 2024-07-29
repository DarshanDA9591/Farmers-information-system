import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agriinfoupdates',
  templateUrl: './agriinfoupdates.component.html',
  styleUrls: ['./agriinfoupdates.component.css']
})
export class AgriinfoupdatesComponent implements OnInit {

model:any={}
isValidFormTitle=false
isValidFormInfo=false

  constructor(private router : Router, private service:ServiceService ) { }

  infolist:any[]
  infolistbyid:any[]

  ngOnInit(): void {
    this.model.StaffID = sessionStorage.getItem("ID"); 
    this.service.GetInfoByID(this.model)
      .subscribe({
      next: (data) => {
        this.model.StaffID = sessionStorage.getItem("ID"); 
      this.infolistbyid = data as any[];
        },
        error: (e) => console.error(e)
        })
      }
        
  
      updateflag:boolean=false;
      showforEdit(list:Model)
      {
      this.model = Object.assign({},list);
      this.updateflag=true;
      }

      showforDelete(list:Model)
      {
      this.model = Object.assign({},list);
      this.service.DeleteInfo(this.model)
      .subscribe({
      next:(result) =>{
      debugger;
      alert("Information Deleted Successfully")
      this.model.InfoTitle="";
      this.model.Info="";
      this.service.GetInfo(this.model)
      .subscribe({
      next: (data) => {
      this.infolist = data as any[];
        },
        error: (e) => console.error(e)
      });  
      }
      });
      }

  onSub(){
    debugger
    if(this.model.InfoTitle==undefined || this.model.InfoTitle=="")
    {
      this.isValidFormTitle=true;
    }
    else if(this.model.Info==undefined || this.model.Info=="")
    {
      this.isValidFormInfo=true;
    }
    else 
    {
      if(this.updateflag==false)
        {
      this.model.StaffID = sessionStorage.getItem("ID")
      this.service.AddInfo(this.model)
      .subscribe({
      next:(result) =>{
      this.isValidFormTitle=false
      this.isValidFormInfo=false
      alert("Agri Information added successfully")
      this.router.navigate(['/sdashboard']);
      this.model.InfoTitle=""
      this.model.Info=""
        },
        error: (e) => console.error(e)
      })
    }
    else{
    this.service.UpdateInfo(this.model)
      .subscribe({
        next:(result) =>{
          this.isValidFormTitle=false
          this.isValidFormInfo=false
          this.model.StaffID = sessionStorage.getItem("ID")
          alert("Agri Information Updated successfully")
          this.router.navigate(['/sdashboard']);
          this.model.InfoTitle=""
          this.model.Info=""
          this.service.GetInfoByID(this.model)
          .subscribe({
          next: (data) => {
            this.model.StaffID = sessionStorage.getItem("ID"); 
          this.infolistbyid = data as any[];
            },
            error: (e) => console.error(e)
            })
            },
            error: (e) => console.error(e)
            
          })
        }
      }
      }
    }

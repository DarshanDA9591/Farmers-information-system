import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';


@Component({
  selector: 'app-farmersqueries',
  templateUrl: './farmersqueries.component.html',
  styleUrls: ['./farmersqueries.component.css']
})
export class FarmersqueriesComponent implements OnInit {

  model: any={};
  qlist: any[]=[]
  qry: any[]=[]
  qid=''
  farmer=''
  mobile=''
  question=''
  reply=''


  isValidFormReply=false
  isShow = false;
  issShow = false;

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {   
    this.model.StaffID = sessionStorage.getItem("ID"); 
    this.service.GetQuery(this.model)
      .subscribe({
      next: (data) => {
        this.model.StaffID = sessionStorage.getItem("ID"); 
      this.qlist = data as any[];
        },
        error: (e) => console.error(e)
        })
      }
          
          
    // this.model.StaffID = sessionStorage.getItem("ID"); 
    // this.service.GetQuery(this.model)
    // .subscribe({
    //  next: (data) => {
    //  this.qlist = data as any[];
    //  this.model.StaffID = sessionStorage.getItem("ID");
    //  const StaffID = this.model.StaffID 
    //  this.qry = this.qlist.find((query) => query.StaffID === StaffID);
    //  this.qid = this.qry["QID"];
    //  this.farmer = this.qry["Farmer"];
    //  this.mobile = this.qry["Mobile"];
    //  this.question = this.qry["QQuestion"];
    //  this.reply = this.qry["QReply"];
    //   },
    //   error: (e) => console.error(e)
    // });
  
    
  
showforEdit(pros)
{
this.model = Object.assign({},pros);
this.isShow = !this.isShow;    
}


   onSub(){ 
    debugger
      this.isShow = !this.isShow;
      if(this.model.QReply==undefined || this.model.QReply=="")
      { 
        this.isValidFormReply=true;
      }
      else{
            this.service.UpdateQuery(this.model)
            .subscribe({
            next:(result) =>{
            debugger;
            alert("Updated Successfully");
            this.router.navigate(['/sdashboard']);
            this.model.StaffID = sessionStorage.getItem("ID"); 
            this.service.GetQuery(this.model)
            .subscribe({
            next: (data) => {
            this.qlist = data as any[];
              },
              error: (e) => console.error(e)
            })
            },
            error: (e) => console.error(e)
            });
          }
        }
      }
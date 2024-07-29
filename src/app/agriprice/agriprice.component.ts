import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agriprice',
  templateUrl: './agriprice.component.html',
  styleUrls: ['./agriprice.component.css']
})
export class AgripriceComponent implements OnInit {

  model:any={}
  pricelist:any[]
  pricelistbyid :any[]
  rlist:any[]
  selected=null
  isValidFormCName=false
  isValidFormPrice=false
  isValidFormDate=false

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.GetRegion(this.model)
    .subscribe({
      next : (data) => {
        this.rlist = data as any[]
      },
      error : (e)=> console.error(e)
    })
    this.model.StaffID = sessionStorage.getItem("ID"); 
    this.service.GetPriceByID(this.model)
      .subscribe({
      next: (data) => {
        this.model.StaffID = sessionStorage.getItem("ID"); 
      this.pricelistbyid = data as any[];
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
  this.service.DeletePrice(this.model)
  .subscribe({
  next:(result) =>{
  debugger;
  alert("Information Deleted Successfully")
  this.router.navigate(['/sdashboard']);
  this.model.CName="";
  this.model.Price="";
  this.model.Date=""
  },
  });
  }

  onSub()
  {
    debugger
    
    if(this.model.CName==undefined || this.model.CName=="")
    {
      this.isValidFormCName=true;
    }
    else if( this.model.Price==undefined || this.model.Price=="")
    {
      this.isValidFormPrice = true;
    }
    else if( this.model.Date==undefined || this.model.Date=="")
    {
      this.isValidFormDate = true;
    }
    else{
      if(this.updateflag==false)
        {
      this.service.AddPrice(this.model)
        .subscribe({
          next: (data) => {
          this.isValidFormCName=false
          this.isValidFormPrice=false
          this.isValidFormDate=false
            alert("Commodities Price added successfully")
            this.router.navigate(['/sdashboard']);
            this.model.CName=""
            this.model.Price=""
            this.model.Date=""
          },
          error: (e) => console.error(e)
          })
        }
        else{
        this.service.UpdatePrice(this.model)
        .subscribe({
          next:(result) =>{
          this.isValidFormCName=false
          this.isValidFormPrice=false
          this.isValidFormDate=false
          alert("Commodities Price Updated successfully")
          this.router.navigate(['/sdashboard']);
          this.model.CName=""
          this.model.Price=""
          this.model.Date=""
          this.service.GetPrice(this.model)
          .subscribe({
          next: (data) => {
          this.pricelist = data as any[];
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

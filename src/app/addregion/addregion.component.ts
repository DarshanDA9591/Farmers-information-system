import { Component, OnInit } from '@angular/core';
import { Model  } from '../model';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addregion',
  templateUrl: './addregion.component.html',
  styleUrls: ['./addregion.component.css']
})
export class AddregionComponent implements OnInit {

  model: any={};  
  isValidFormRegion= false
  rlist: any[]=[];

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit():void{
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
  this.isValidFormRegion= false;
  if(this.model.Region== undefined || this.model.Region=="")
  {
    this.isValidFormRegion=true;
  }
  else{
    
    this.service.AddRegion(this.model)
    .subscribe({
    next:(result) =>{
    alert("Region added successfully");
    this.model.Region ="";
    this.service.GetRegion(this.model)
    .subscribe({
     next: (data) => {
     this.rlist = data as any[];
      },
      error: (e) => console.error(e)
    })
    },
    error: (e) => console.error(e)
    });
    }
}
}

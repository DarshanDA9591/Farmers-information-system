import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';


@Component({
  selector: 'app-viewpricedetails',
  templateUrl: './viewpricedetails.component.html',
  styleUrls: ['./viewpricedetails.component.css']
})
export class ViewpricedetailsComponent implements OnInit {
  model: any={}
  pricelist: any[]=[]
  
    constructor(private router:Router,private service:ServiceService) { }
  
    ngOnInit(): void {
      this.service.GetPrice(this.model)
      .subscribe({
       next: (data) => {
       this.pricelist = data as any[];
        },
        error: (e) => console.error(e)
      })
      }
      
  
  }

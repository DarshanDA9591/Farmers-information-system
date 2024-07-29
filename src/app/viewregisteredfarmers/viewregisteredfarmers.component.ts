import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';


@Component({
  selector: 'app-viewregisteredfarmers',
  templateUrl: './viewregisteredfarmers.component.html',
  styleUrls: ['./viewregisteredfarmers.component.css']
})
export class ViewregisteredfarmersComponent implements OnInit {

  model: any={}
  farmerlist: any[]=[]
  
    constructor(private router:Router,private service:ServiceService) { }
  
    ngOnInit(): void {
      this.service.GetFarmer(this.model)
      .subscribe({
       next: (data) => {
       this.farmerlist = data as any[];
        },
        error: (e) => console.error(e)
      })
      }
      
  
  }
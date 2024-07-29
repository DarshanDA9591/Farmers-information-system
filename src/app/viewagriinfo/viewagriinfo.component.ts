import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';


@Component({
  selector: 'app-viewagriinfo',
  templateUrl: './viewagriinfo.component.html',
  styleUrls: ['./viewagriinfo.component.css']
})
export class ViewagriinfoComponent implements OnInit {
    model: any={}
    infolist: any[]=[]
    
      constructor(private router:Router,private service:ServiceService) { }
    
      ngOnInit(): void {
        this.service.GetInfo(this.model)
        .subscribe({
         next: (data) => {
         this.infolist = data as any[];
          },
          error: (e) => console.error(e)
        })
        }
        
    
    }
import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent implements OnInit {

  model : any={ };

  constructor(private route:ActivatedRoute, private service:ServiceService) { }

  slist: any[]=[];
  pros:any[]=[];
  staff=""

  ngOnInit() {
    this.service.GetStaff(this.model)
    .subscribe({
     next: (data) => {
     this.slist = data as any[];
     this.model.StaffID = sessionStorage.getItem("ID");
     const StaffID = this.model.StaffID 
     this.pros = this.slist.find((staff) => staff.StaffID === StaffID);
     this.staff = this.pros["Staff"];
      },
      error: (e) => console.error(e)
    })
  }
}
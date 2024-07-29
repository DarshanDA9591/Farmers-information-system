import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-fdashboard',
  templateUrl: './fdashboard.component.html',
  styleUrls: ['./fdashboard.component.css']
})
export class FdashboardComponent implements OnInit {

  model : any={ };

  constructor(private route:ActivatedRoute, private service:ServiceService) { }

  flist: any[]=[];
  pros:any[]=[];
  farmer=""

  ngOnInit() {

    this.service.GetFarmerById(this.model)
    .subscribe({
     next: (data) => {
     this.flist = data as any[];
     this.model.FarmerID = sessionStorage.getItem("ID");
     const FarmerID = this.model.FarmerID 
     this.pros = this.flist.find((farmer) => farmer.FarmerID === FarmerID);
     this.farmer = this.pros["Farmer"];
      },
      error: (e) => console.error(e)
    })
  }
}

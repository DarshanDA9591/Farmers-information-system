import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  model: any={}
  flist: any[]
  isShow = false;
  issShow = false;
  isValidFormFarmer = false;
  isValidFormAddress = false;
  isValidFormMobile = false;
  isValidFormFarmerID = false;
  isValidFormPassword = false;
  farmer= ''
  address=''
  mobile=''
  farmerid=''
  password=''
  pros=''

  constructor(private router:Router,private service:ServiceService) { }
    
    ngOnInit(): void {
      debugger
    this.service.GetFarmerById(this.model)
    .subscribe({
     next: (data) => {
     this.flist = data as any[];
     this.model.FarmerID = sessionStorage.getItem("ID");
     const FarmerID = this.model.FarmerID 
     this.pros = this.flist.find((farmer) => farmer.FarmerID === FarmerID);
     this.farmer = this.pros["Farmer"];
     this.address = this.pros["Address"];
     this.mobile = this.pros["Mobile"];
     this.farmerid = this.pros["FarmerID"];
     this.password = this.pros["Password"];
      },
      error: (e) => console.error(e)
    })
}

  showforEdit(pros)
  {
  this.model = Object.assign({},pros);
  this.isShow = !this.isShow;    
  }

      onSub(){
        this.isShow = !this.isShow;
        debugger;
        if(this.model.Farmer==undefined || this.model.Farmer=="")
        { 
          this.isValidFormFarmer=true;
        }
        else if(this.model.Address==undefined || this.model.Address=="")
        {
        this.isValidFormAddress=true;
        }
        else if(this.model.Mobile==undefined || this.model.Mobile=="")
        {
        this.isValidFormMobile=true;
        }
        else if(this.model.FarmerID==undefined || this.model.FarmerID=="")
        {
        this.isValidFormFarmerID=true;
        }
        else if(this.model.Password==undefined || this.model.Password=="")
        {
        this.isValidFormPassword=true;
        }
        else
        {
          this.service.UpdateFarmer(this.model)
          .subscribe({
          next:(result) =>{
          this.isValidFormFarmer= false;
          this.isValidFormAddress = false;
          this.isValidFormMobile = false;
          this.isValidFormFarmerID = false;
          this.isValidFormPassword = false;
          alert("Updated Successfully");
          this.router.navigate(['/fdashboard']);
          this.service.GetFarmerById(this.model)
          .subscribe({
          next: (data) => {
          this.flist = data as any[];
            },
            error: (e) => console.error(e)
          })
          },
          error: (e) => console.error(e)
          });
        }
      }
    }

      
  
  
  

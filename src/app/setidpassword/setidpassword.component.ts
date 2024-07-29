import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-setidpassword',
  templateUrl: './setidpassword.component.html',
  styleUrls: ['./setidpassword.component.css']
})
export class SetidpasswordComponent implements OnInit {
 
  model: any={}

  isValidFormStaffID = false;
  isValidFormPassword = false;

  constructor(private router:Router,private service:ServiceService) { }
    
  stafflist: any[]=[]

    ngOnInit(): void {
      debugger
    this.service.GetStaff(this.model)
    .subscribe({
     next: (data) => {
     this.stafflist = data as any[];
      },
      error: (e) => console.error(e)
    })
}

  showforEdit(list)
  {
  this.model = Object.assign({},list);
  }

      onSub(){
        debugger;
        this.isValidFormStaffID= false;
        if(this.model.StaffID==undefined || this.model.StaffID=="")
        { 
          this.isValidFormStaffID=true;
        }
        else if(this.model.Password==undefined || this.model.Password=="")
        {
        this.isValidFormPassword=true;
        }
        else
        {
          this.service.UpdateStaff(this.model)
          .subscribe({
          next:(result) =>{
          debugger;
          this.isValidFormStaffID = false;
          this.isValidFormPassword = false;
          alert("Updated Successfully");
          this.model.StaffID=""
          this.model.Password=""
          this.service.GetStaff(this.model)
          .subscribe({
          next: (data) => {
          this.stafflist = data as any[];
            },
            error: (e) => console.error(e)
          })
          },
          error: (e) => console.error(e)
          });
        }
      }
    }


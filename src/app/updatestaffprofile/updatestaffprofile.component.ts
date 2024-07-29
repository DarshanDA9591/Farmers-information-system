import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Model } from '../model';

@Component({
  selector: 'app-updatestaffprofile',
  templateUrl: './updatestaffprofile.component.html',
  styleUrls: ['./updatestaffprofile.component.css']
})
export class UpdatestaffprofileComponent implements OnInit {

    model: any={}
    stafflist: any[]=[]
    isShow = false;
    issShow = false;
    isValidFormHospital = false;
    isValidFormAddress = false;
    isValidFormMobile = false;
    isValidFormEmail = false;
    isValidFormStaffID = false;
    isValidFormPassword = false;
    staff= ''
    region:''
    address=''
    mobile=''
    email=''
    staffid=''
    password=''
    pros=''
  
    constructor(private router:Router,private service:ServiceService) { }
      
      ngOnInit(): void {
        debugger
      this.service.GetStaff(this.model)
      .subscribe({
       next: (data) => {
       this.stafflist = data as any[];
       this.model.StaffID = sessionStorage.getItem("ID");
       const StaffID = this.model.StaffID 
       this.pros = this.stafflist.find((staff) => staff.StaffID === StaffID);
       this.staff = this.pros["Staff"];
       this.region = this.pros["Region"];
       this.address = this.pros["Address"];
       this.mobile = this.pros["Mobile"];
       this.email = this.pros["Email"];
       this.staffid = this.pros["StaffID"];
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
            this.service.UpdateStaffProfile(this.model)
            .subscribe({
            next:(result) =>{
            debugger;
            alert("Updated Successfully");
            this.router.navigate(['/sdashboard']);
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
      
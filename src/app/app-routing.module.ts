import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AddregionComponent } from './addregion/addregion.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AgriinfoupdatesComponent } from './agriinfoupdates/agriinfoupdates.component';
import { AgripriceComponent } from './agriprice/agriprice.component';
import { FarmersqueriesComponent } from './farmersqueries/farmersqueries.component';
import { FdashboardComponent } from './fdashboard/fdashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewregComponent } from './newreg/newreg.component';
import { PostquerytostaffComponent } from './postquerytostaff/postquerytostaff.component';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { SetidpasswordComponent } from './setidpassword/setidpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { UpdatestaffprofileComponent } from './updatestaffprofile/updatestaffprofile.component';
import { ViewagriinfoComponent } from './viewagriinfo/viewagriinfo.component';
import { ViewpricedetailsComponent } from './viewpricedetails/viewpricedetails.component';
import { ViewregisteredfarmersComponent } from './viewregisteredfarmers/viewregisteredfarmers.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'adashboard',component:AdashboardComponent,
  children:[
    {path:'addregion',component:AddregionComponent},
    {path:'addstaff',component:AddstaffComponent},
    {path:'setidpassword',component:SetidpasswordComponent},
    {path:'viewregisteredfarmers',component:ViewregisteredfarmersComponent},
    {path:'updatepassword',component:UpdatepasswordComponent}
  ]},
  {path:'sdashboard',component:SdashboardComponent,
  children : [
    {path:'agriinfoupdates',component:AgriinfoupdatesComponent},
    {path:'agriprice',component:AgripriceComponent},
    {path:'farmersqueries',component:FarmersqueriesComponent},
    {path:'updatestaffprofile',component:UpdatestaffprofileComponent}
  ]},
  {path:'fdashboard',component:FdashboardComponent,
  children : [
    {path:'viewagriinfo',component:ViewagriinfoComponent},
    {path:'viewpricedetails',component:ViewpricedetailsComponent},
    {path:'postquerytostaff',component:PostquerytostaffComponent},
    {path:'updateprofile',component:UpdateprofileComponent}
  ]},
  {path:'newreg',component:NewregComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

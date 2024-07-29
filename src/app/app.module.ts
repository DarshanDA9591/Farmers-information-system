import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { FdashboardComponent } from './fdashboard/fdashboard.component';
import { NewregComponent } from './newreg/newreg.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { PostquerytostaffComponent } from './postquerytostaff/postquerytostaff.component';
import { ViewagriinfoComponent } from './viewagriinfo/viewagriinfo.component';
import { ViewpricedetailsComponent } from './viewpricedetails/viewpricedetails.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ViewregisteredfarmersComponent } from './viewregisteredfarmers/viewregisteredfarmers.component';
import { AddregionComponent } from './addregion/addregion.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { SetidpasswordComponent } from './setidpassword/setidpassword.component';
import { UpdatestaffprofileComponent } from './updatestaffprofile/updatestaffprofile.component';
import { AgriinfoupdatesComponent } from './agriinfoupdates/agriinfoupdates.component';
import { AgripriceComponent } from './agriprice/agriprice.component';
import { FarmersqueriesComponent } from './farmersqueries/farmersqueries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdashboardComponent,
    SdashboardComponent,
    FdashboardComponent,
    NewregComponent,
    UpdateprofileComponent,
    PostquerytostaffComponent,
    ViewagriinfoComponent,
    ViewpricedetailsComponent,
    UpdatepasswordComponent,
    ViewregisteredfarmersComponent,
    AddregionComponent,
    AddstaffComponent,
    SetidpasswordComponent,
    UpdatestaffprofileComponent,
    AgriinfoupdatesComponent,
    AgripriceComponent,
    FarmersqueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

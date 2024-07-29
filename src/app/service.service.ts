import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { from, Observable } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/toPromise';
import { Model } from './model';


const baseUrl="http://localhost:31387/api/Agri"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

    Login(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/Login',data)
    }
    UpdatePassword(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/UpdatePassword',data)
    }
    AddFarmer(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/AddFarmer',data)
    }
    UpdateFarmer(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/UpdateFarmer',data)
    } 
    GetFarmer(data : any) : Observable<any> {
      return this.http.get(baseUrl+'/GetFarmer',data); 
    }
    GetFarmerById(data : any) : Observable<any> {
      return this.http.get(baseUrl+'/GetFarmerById',data); 
    }
    PostQuery(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/PostQuery',data)
    }
    GetQuery(data : any) : Observable<any> {
      return this.http.post(baseUrl+'/GetQuery',data); 
    }
    GetReply(data : any) : Observable<any> {
      return this.http.post(baseUrl+'/GetReply',data); 
    }
    AddRegion(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/AddRegion',data)
    }
    GetRegion(data : any) : Observable<any> {
      return this.http.get(baseUrl+'/GetRegion',data); 
    }
    AddStaff(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/AddStaff',data)
    }
    GetStaff(data : any) : Observable<any> {
      return this.http.get(baseUrl+'/GetStaff',data); 
    }
    UpdateStaff(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/UpdateStaff',data)
    } 
    UpdateStaffProfile(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/UpdateStaffProfile',data)
    } 
    AddInfo(data:any) : Observable <any>{
      return this.http.post(baseUrl+ '/AddInfo',data)
    }
    GetInfo(data:any) : Observable <any>{
      return this.http.get(baseUrl+ '/GetInfo', data)
    }
    GetInfoByID(data:any) : Observable <any>{
      return this.http.post(baseUrl+ '/GetInfoByID', data)
    }
    UpdateInfo(data:any) : Observable <any>{
      return this.http.post(baseUrl+ '/UpdateInfo',data)
    }
    DeleteInfo(data:any) : Observable <any>{
      return this.http.post(baseUrl+ '/DeleteInfo',data)
    }
    AddPrice(data:any) : Observable <any>{
      return this.http.post(baseUrl+ '/AddPrice',data)
    }
    GetPrice(data:any) : Observable <any>{
      return this.http.get(baseUrl+ '/GetPrice', data)
    }
    GetPriceByID(data:any) : Observable <any>{
      return this.http.post(baseUrl+ '/GetPriceByID', data)
    }
    UpdatePrice(data: any) : Observable <any>{
      debugger
      return this.http.post(baseUrl+ '/UpdatePrice',data)
    }
    DeletePrice(data: any) : Observable <any>{
      debugger
      return this.http.post(baseUrl+ '/DeletePrice',data)
    }
    UpdateQuery(data: any) : Observable <any>{
      return this.http.post(baseUrl+ '/UpdateQuery',data)
    }

  }


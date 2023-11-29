import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='';

  constructor(private httpClient:HttpClient) { }

  signup(data:any){
    return this.httpClient.post(this.url+"/user/signup",data,{
      headers:new HttpHeaders().set('Content-Type','application/json')
    })
  }


  forgotPassword(data:any){
    return this.httpClient.post(this.url+"/user/forgotPassword",data,{
      headers:new HttpHeaders().set('Content-Type','application/json')
    })
  }



}

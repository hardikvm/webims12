import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient){

   }

   

  login(data:any){
   return  this.http.post(`${this.apiUrl}/api/user/login`,data)
  }

  signUp(data:any){
   return  this.http.post(`${this.apiUrl}/api/user/signup`,data)
  }
  getBookings(){
    return  this.http.get(`${this.apiUrl}/api/main`)
  }

  addbooking(data:any){
    return this.http.post(`${this.apiUrl}/api/main/create`,data)
  }

   
}

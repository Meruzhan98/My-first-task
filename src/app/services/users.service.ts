import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  requestOptions: { headers: HttpHeaders; };

  constructor( private http: HttpClient) {
    const headerDict = {
      'app-id': '612b86dfad315422d4e00ce5'
     }
     
     this.requestOptions = {
       headers: new HttpHeaders(headerDict), 
     };
   }
  
  getUserData() 
  {
    return this.http.get('https://dummyapi.io/data/v1/user?limit=10', this.requestOptions);
  }

  getUser(id: string) {
    return this.http.get(`https://dummyapi.io/data/v1/user/${id}`, this.requestOptions);
  }

}

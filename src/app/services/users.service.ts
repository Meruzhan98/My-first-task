import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }
  
  getUserData() 
  {
    const headerDict = {
     'app-id': '612b86dfad315422d4e00ce5'
    }
    
    const requestOptions = {
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get('https://dummyapi.io/data/v1/user?limit=10', requestOptions);
  }

}

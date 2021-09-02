import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getCityByName(cityName) 
  {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f2b4773d9b9077df3dfd83fadb97b6fa`);
  }

}

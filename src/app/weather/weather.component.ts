import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weather = {};
  cityName = '';
  savedWeather = [];

  // Dependecy Injection 
  constructor(private weatherService: WeatherService) { 

  }
  
  buttonTriggered()
  {
    this.weatherService.getCityByName(this.cityName)
    .subscribe((data) =>{
      console.log(data);
      this.weather = data;
    })
  }

  checkWeatherData() {
    return Object.keys(this.weather).length;
  }

  saveWeatherData() {
    this.savedWeather.push(this.weather);
    console.log(this.savedWeather);
  }
}

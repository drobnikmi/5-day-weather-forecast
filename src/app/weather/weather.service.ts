import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiConfig } from '../model/api-config';
import { ForecastModel } from '../model/forecast.model';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentCity(lat: number, lon:number): Observable<ForecastModel>{
    return this.http.get<ForecastModel>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiConfig.API_KEY}&units=metric`);
  }

  getCityWeather(cityName: string): Observable<ForecastModel> {
    return this.http.get<ForecastModel>(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${ApiConfig.API_KEY}&units=metric`);
  }
}

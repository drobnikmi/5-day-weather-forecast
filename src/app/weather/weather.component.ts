import { Component, OnInit } from '@angular/core';
import { CurrentCoords } from '../model/current-coords'
import { WeatherService } from './weather.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { TemporaryForestModel } from '../model/temporary-forecast.model';
import { ForecastModel } from '../model/forecast.model';

@Component({
  selector: 'wh-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  currentLat: number;
  currentLon: number;
  cityName: string;
  forecastForm: FormGroup;
  dailyForecast: TemporaryForestModel;
  dailyForecastGroup: Array<TemporaryForestModel> = [];
  backendValidation: HttpErrorResponse;

  constructor(private weatherService: WeatherService,
              private fb: FormBuilder) {
                this.forecastForm = fb.group({
                  cityName: [null, [
                    Validators.required,
                  ]
                ]
                })
              }

  ngOnInit() {
    if(navigator){
      navigator.geolocation.getCurrentPosition(
        (loc) => {
          this.currentLat = loc.coords.latitude;
          this.currentLon = loc.coords.longitude;
          this.weatherService.getCurrentCity(this.currentLat, this.currentLon).subscribe(
            (forest) => {
              this.transformedDetails(forest);
          });
        }
      );
    } else{
      this.weatherService.getCurrentCity(CurrentCoords.lat, CurrentCoords.lon).subscribe(
        (forest) => {
        this.transformedDetails(forest);
      });
    }
  }

  getCity(): void{
    this.weatherService.getCityWeather(this.forecastForm.controls.cityName.value).subscribe(
      (forest) => {
        this.transformedDetails(forest);
      },
      (error) => {
        this.backendValidation = error;
      }
    );
  }

  transformedDetails(forestDetails: ForecastModel){
    this.cityName = `${forestDetails.city.name}, ${forestDetails.city.country}`;
    this.dailyForecastGroup = [];
    for(let i = 0; i < 5; i++) {
      this.dailyForecastGroup.push(forestDetails.list[i*8]);
    }
  }

  clearBackendValidation():void{
    this.backendValidation = null;
  }
}

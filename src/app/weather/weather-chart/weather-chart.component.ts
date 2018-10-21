import { Component, OnChanges, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { TemporaryForestModel } from '../../model/temporary-forecast.model';

@Component({
  selector: 'wh-weather-chart',
  templateUrl: './weather-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherChartComponent implements OnChanges {
  @Input() dailyForecastGroup: Array<TemporaryForestModel>;
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLegend:boolean = true;
  barChartType:string = 'bar';
  barChartLabels:string[] = [];

  barChartData:any[] = [
    {data: [], label: 'TEMP_MAX'},
    {data: [], label: 'TEMP_MIN'}
  ];
  avarage:number = 0;

  constructor() {}

  ngOnChanges() {
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    this.barChartData[1].data = [];
    this.avarage = 0;
    for(let day in this.dailyForecastGroup){
      this.barChartData[0].data.push(this.dailyForecastGroup[day].main.temp_max);
      this.barChartData[1].data.push(this.dailyForecastGroup[day].main.temp_min);

      let dailyDate = new Date(this.dailyForecastGroup[day].dt * 1000)
      this.barChartLabels.push(new Intl.DateTimeFormat('en-US').format(dailyDate));

      this.avarage += this.dailyForecastGroup[day].main.pressure;
    }

    this.avarage = this.avarage / 5;
  }

  chartClicked(e:any):void {
  }

  chartHovered(e:any):void {
  }

}


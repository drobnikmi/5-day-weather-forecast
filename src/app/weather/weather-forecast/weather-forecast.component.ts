import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { TemporaryForestModel } from '../../model/temporary-forecast.model';

@Component({
  selector: 'wh-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastComponent {
  @Input() dailyForecastGroup: Array<TemporaryForestModel>;

  constructor() { }

}

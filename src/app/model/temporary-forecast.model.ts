import { CloudsModel } from './clouds.model';
import { MainModel } from './main.model';
import { RainModel } from './rain.model';
import { SysModel } from './sys.model';
import { WeatherDetailsModel } from './weather-details.model';
import { WindModel } from './wind.model';

export interface TemporaryForestModel {
    dt: number;
    dt_txt: string;
    clouds: CloudsModel;
    main: MainModel;
    rain?: RainModel;
    sys: SysModel;
    weather: Array<WeatherDetailsModel>;
    wind: WindModel;
}
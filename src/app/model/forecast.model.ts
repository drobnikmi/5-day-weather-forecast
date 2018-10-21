import { CityModel } from './city.model';
import { TemporaryForestModel } from './temporary-forecast.model';

export interface ForecastModel {
    city: CityModel;
    cod: string;
    cnt: number;
    list: Array<TemporaryForestModel>;
    message: number;
}

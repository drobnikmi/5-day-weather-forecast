import { CoordModel } from './coord.model';

export interface CityModel {
    id: number;
    country: string;
    name: string;
    coord: CoordModel;
}
import { BaseEntity } from 'typeorm';
import { Car } from '../car/car.entity';
export declare class Owner extends BaseEntity {
    id: string;
    name: string;
    purchaseDate: Date;
    car: Car;
}

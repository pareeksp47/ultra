import { CarService } from './car.service';
import { Car } from './car.entity';
export declare class CarController {
    private service;
    constructor(service: CarService);
    getCar(ids: any, isCarRequest: any): Promise<any[]>;
    create(car: Car): Car;
    update(car: Car): Promise<Car>;
    deleteUser(params: any): Promise<void>;
}

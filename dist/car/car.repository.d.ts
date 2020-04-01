import { AbstractRepository } from "typeorm";
import { Car } from "../car/car.entity";
export declare class CarRepository extends AbstractRepository<Car> {
    saveorUpdateCar(car: Car): Promise<Car>;
    find(ids: string): Promise<Car[]>;
    deleteCar(car: Car): Promise<void>;
}

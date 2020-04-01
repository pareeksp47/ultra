import { Car } from './car.entity';
import { CarRepository } from "./car.repository";
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { OwnerService } from '../owner/owner.service';
export declare class CarService {
    private readonly carRepository;
    private manufacturerService;
    private ownerService;
    constructor(carRepository: CarRepository, manufacturerService: ManufacturerService, ownerService: OwnerService);
    getCars(ids: string, isCarRequest: string): Promise<any[]>;
    saveCar(car: Car): Promise<Car>;
    updateCar(car: Car): Promise<Car>;
    deleteCar(id: string): Promise<void>;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './car.entity';
import {CarRepository} from "./car.repository";
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { OwnerService } from '../owner/owner.service';
import { v4 as uuid } from 'uuid';
@Injectable()
export class CarService {

    constructor( 
        @InjectRepository(CarRepository)
        private readonly carRepository: CarRepository, private manufacturerService: ManufacturerService, private ownerService: OwnerService
      ) {
      }

    async getCars(ids: string, isCarRequest: string): Promise<any[]> {
        const cars =  await this.carRepository.find(ids);

        if(isCarRequest ===  "true"){
            return   cars;
        }else{

            const manufacturers = [];
            cars.forEach( (car) => {

                
                    manufacturers.push(car.manufacturer);
            });
            return manufacturers;
        }
    }

    async saveCar(car: Car): Promise<Car> {
        try{
            car.id = uuid();
            await this.manufacturerService.saveManufacturer(car.manufacturer);
        
            await this.ownerService.saveOwners(car.owners);
            return await this.carRepository.saveorUpdateCar(car);
        }catch(error){
            await this.manufacturerService.deleteManufacturer(car.manufacturer);
            throw error;
        }
    }

    async updateCar(car: Car) {
       try{
           
           await this.manufacturerService.updateManufacturer(car.manufacturer);
           return await this.carRepository.saveorUpdateCar(car);
        }catch(error){
            await this.manufacturerService.deleteManufacturer(car.manufacturer);
            throw error;
        }
}
    async deleteCar(id: string) {
        try{
            const car = (await this.carRepository.find(id))[0] as Car;
            await this.manufacturerService.deleteManufacturer(car.manufacturer);
            this.carRepository.deleteCar(car);
        }catch(error){
            throw error;
        }
    }
}
import {EntityRepository, AbstractRepository} from "typeorm";
import {Car} from "../car/car.entity";

@EntityRepository(Car)
export class CarRepository extends AbstractRepository<Car> {

    

   async saveorUpdateCar(car :Car) : Promise<Car>{
      try{  
        return await this.manager.save(car);
        }catch(error){
            throw error;
        }
    }

    async find(ids: string) : Promise<Car[]>{
        try{
            return await this.manager.createQueryBuilder(Car,'car').innerJoinAndSelect('car.manufacturer','Manufacturer').innerJoinAndSelect('car.owners','Owner').where('car.id IN (:id)', { id: ids.split(',') }).getMany();
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    

   async deleteCar(car: Car) {
        try{
            await this.manager.remove(car);
        }catch(error){
            throw error;
        }
    }

    

}
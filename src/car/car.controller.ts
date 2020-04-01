import { Controller, Post, Body, Put, Delete,Param, Get, ValidationPipe, Query} from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.entity';
@Controller('cars')
export class CarController {

    constructor(private service: CarService) { }

    @Get()
    getCar(@Query('ids') ids,@Query('isCarRequest')isCarRequest ) {
        
        try{

            return this.service.getCars(ids,isCarRequest) ;
            
        }catch(error){
            console.log("Get Car :" + error);
       }
    }


    @Post()
    create(@Body(new ValidationPipe({transform: true})) car: Car) {
       try{
            
            this.service.saveCar(car);
            return car;
       }catch(error){
            console.log("Create Car :" + error);
       }
        
    }

    @Put()
    update(@Body(new ValidationPipe({transform: true})) car: Car) {
        try{
            return this.service.updateCar(car);
        }catch(error){
                console.log("Update Car :" + error);
        }
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        try{
            return this.service.deleteCar(params.id);

        }catch(error){
                console.log("Delete Car :" + error);
        }
    }
}
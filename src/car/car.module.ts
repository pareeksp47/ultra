import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarService } from './car.service';
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { OwnerService } from '../owner/owner.service';
import { CarRepository } from './car.repository';
import { ManufacturerRepository } from '../manufacturer/manufacturer.repository';
import { OwnerRepository } from '../owner/owner.repository';
import { CarController } from './car.controller';
import { Car } from './car.entity';
import { CarSubscriber } from './car.subscribers';

@Module({
  imports: [TypeOrmModule.forFeature([Car, CarRepository, ManufacturerRepository, OwnerRepository ])],
  providers: [CarService,ManufacturerService,OwnerService,CarSubscriber],
  controllers: [CarController]
})
export class CarModule {}

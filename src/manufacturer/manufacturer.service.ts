import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manufacturer } from './manufacturer.entity';
import {ManufacturerRepository} from "./manufacturer.repository";
import { v4 as uuid } from 'uuid';
@Injectable()
export class ManufacturerService {

    constructor(
        @InjectRepository(ManufacturerRepository)
        private readonly manufacturerRepository: ManufacturerRepository, // <-- inject like this
      ) {
      }

    async saveManufacturer(manufacturer: Manufacturer): Promise<Manufacturer> {
        try{
            manufacturer.id = uuid();
            return await this.manufacturerRepository.saveorUpdateManufacturer(manufacturer);
        }catch(error){
            throw error;
        }
    }

    async updateManufacturer(manufacturer: Manufacturer) : Promise<Manufacturer>{
        try{
            return await this.manufacturerRepository.saveorUpdateManufacturer(manufacturer);
        }catch(error){
            throw error;
        }
    }

    async deleteManufacturer(manufacturer: Manufacturer) {
        try{
            await this.manufacturerRepository.deleteManufacturer(manufacturer);
        }catch(error){
            throw error;
        }
    }
}
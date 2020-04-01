import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './Owner.entity';
import {OwnerRepository} from "./Owner.repository";
import { v4 as uuid } from 'uuid';
@Injectable()
export class OwnerService {

    constructor(
        @InjectRepository(OwnerRepository)
        private readonly ownerRepository: OwnerRepository, // <-- inject like this
      ) {
      }

    async saveOwners(owners: Owner[]): Promise<Owner[]> {
        try{
            owners.forEach( (owner) => {
                owner.id = uuid();
            });
            
            return await this.ownerRepository.saveorUpdateOwners(owners);
        }catch(error){
            throw error;
        }
    }

    async updateOwners(owners: Owner[]): Promise<Owner[]>  {
        try{
            return await this.ownerRepository.saveorUpdateOwners(owners);
        }catch(error){
            throw error;
        }
    }

    async deleteOwner(owners: Owner[]) {
        try{
            await this.ownerRepository.deleteOwners(owners);
        }catch(error){
            throw error;
        }
    }
}
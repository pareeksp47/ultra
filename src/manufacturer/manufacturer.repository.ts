import {EntityRepository, AbstractRepository} from "typeorm";
import {Manufacturer} from "../manufacturer/manufacturer.entity";

@EntityRepository(Manufacturer)
export class ManufacturerRepository extends AbstractRepository<Manufacturer> {

    

    async saveorUpdateManufacturer(manufacturer :Manufacturer) : Promise<Manufacturer>{
        
        try{
            return await this.manager.save(manufacturer);
        }catch(error){
            throw error;
        }
    }

    

    async deleteManufacturer(manufacturer :Manufacturer) {
        try{
            await this.manager.remove(manufacturer);
        }catch(error){
            throw error;
        }
    }

}
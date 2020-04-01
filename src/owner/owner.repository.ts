import {EntityRepository, AbstractRepository} from "typeorm";
import {Owner} from "./owner.entity";

@EntityRepository(Owner)
export class OwnerRepository extends AbstractRepository<Owner> {

    

    async saveorUpdateOwners(owner :Owner[]) : Promise<Owner[]>{
        try{
            return await this.manager.save(owner);
        }catch(error){
                throw error;
        }
        
    }


   async  deleteOwners(owners :Owner[]) {
    
    try{
        await  this.manager.remove(owners);
    }catch(error){
        throw error;
    }
    }

}
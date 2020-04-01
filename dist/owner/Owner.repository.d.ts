import { AbstractRepository } from "typeorm";
import { Owner } from "./owner.entity";
export declare class OwnerRepository extends AbstractRepository<Owner> {
    saveorUpdateOwners(owner: Owner[]): Promise<Owner[]>;
    deleteOwners(owners: Owner[]): Promise<void>;
}

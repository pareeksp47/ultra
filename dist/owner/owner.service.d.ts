import { Owner } from './Owner.entity';
import { OwnerRepository } from "./Owner.repository";
export declare class OwnerService {
    private readonly ownerRepository;
    constructor(ownerRepository: OwnerRepository);
    saveOwners(owners: Owner[]): Promise<Owner[]>;
    updateOwners(owners: Owner[]): Promise<Owner[]>;
    deleteOwner(owners: Owner[]): Promise<void>;
}

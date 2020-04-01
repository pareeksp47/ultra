import { AbstractRepository } from "typeorm";
import { Manufacturer } from "../manufacturer/manufacturer.entity";
export declare class ManufacturerRepository extends AbstractRepository<Manufacturer> {
    saveorUpdateManufacturer(manufacturer: Manufacturer): Promise<Manufacturer>;
    deleteManufacturer(manufacturer: Manufacturer): Promise<void>;
}

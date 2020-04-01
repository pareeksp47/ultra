import { Manufacturer } from './manufacturer.entity';
import { ManufacturerRepository } from "./manufacturer.repository";
export declare class ManufacturerService {
    private readonly manufacturerRepository;
    constructor(manufacturerRepository: ManufacturerRepository);
    saveManufacturer(manufacturer: Manufacturer): Promise<Manufacturer>;
    updateManufacturer(manufacturer: Manufacturer): Promise<Manufacturer>;
    deleteManufacturer(manufacturer: Manufacturer): Promise<void>;
}

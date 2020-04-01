import { BaseEntity, ObjectLiteral, Double } from 'typeorm';
import { Manufacturer } from '../manufacturer/manufacturer.entity';
import { Owner } from '../owner/owner.entity';
export declare class Car extends BaseEntity {
    id: string;
    manufacturer: Manufacturer;
    price: Double;
    firstRegistrationDate: Date;
    owners: Owner[];
    deepClone<T extends ObjectLiteral>(o: T): T;
}

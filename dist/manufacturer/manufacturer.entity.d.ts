import { BaseEntity } from 'typeorm';
export declare class Manufacturer extends BaseEntity {
    id: string;
    name: string;
    phone: string;
    siret: number;
}

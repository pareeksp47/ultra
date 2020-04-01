import { Entity, Column, BaseEntity, PrimaryColumn  } from 'typeorm';
import { IsInt, IsString } from 'class-validator';

@Entity()
export class Manufacturer extends BaseEntity{

    @IsString()
    @Column({  primary: true })
    @PrimaryColumn()
    id: string;

    @IsString()
    @Column()
    name:string;

    @Column({ length: 10 })
    @IsString()
    phone:string;

    @Column()
    @IsInt()
    siret:number;
    
}

import { Entity, Column, ManyToOne, BaseEntity, PrimaryColumn,JoinColumn  } from 'typeorm';
import { Car } from '../car/car.entity';
import {  IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@Entity()
export class Owner extends BaseEntity{

    @IsString()
    @Column({ primary: true })
    @PrimaryColumn()
    id: string;

    @IsString()
    @Column()
    name:string;

    @IsString()
    @Column()
    purchaseDate:Date;

    @ValidateNested({ each: true })
    @JoinColumn({name:"car", referencedColumnName : "id"})
    @ManyToOne(type => Car, car => car.owners,{
        onDelete : "CASCADE",
        eager: true
    })
    @Type(() => Car)
    car: Car;


    
}


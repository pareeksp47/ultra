import { Entity, Column, OneToMany,OneToOne, JoinColumn, BaseEntity, ObjectLiteral, Double } from 'typeorm';
import { Manufacturer } from '../manufacturer/manufacturer.entity';
import { Owner } from '../owner/owner.entity';
import { IsInt, IsString,ValidateNested, IsDecimal, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { type } from 'os';


@Entity()
export class Car extends BaseEntity{

    @IsString()
    @Column({  primary: true })
    id: string;

    @ValidateNested({ each: true })
    @Type(() => Manufacturer)
    @OneToOne(type => Manufacturer,{eager : true,
      onDelete : "CASCADE"
    })
    @JoinColumn({name:"manufacturer", referencedColumnName : "id"})
    manufacturer:Manufacturer;

    @Column("decimal", { precision: 5, scale: 2 }) 
    @IsNumber()
    price:Double;

    @Column()
    @IsString() 
    firstRegistrationDate:Date;

  
    @ValidateNested({ each: true })
    @OneToMany(type => Owner, owner => owner.car,{cascade : true})
    @Type(() => Owner)
   owners: Owner[];

    deepClone<T extends ObjectLiteral>(o: T): T {
    const copy = {...o}
    for(const key in copy) {
      if(typeof copy[key] === "object") {
        copy[key] = this.deepClone(copy[key])
      }
    }
    return copy
  }

   

}

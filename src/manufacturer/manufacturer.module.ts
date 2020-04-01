import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerRepository } from './manufacturer.repository';
import { Manufacturer } from './manufacturer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manufacturer,ManufacturerRepository])],
  providers: [ManufacturerService],
})
export class ManufacturerModule {}

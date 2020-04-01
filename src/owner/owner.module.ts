import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerService } from './owner.service';
import { OwnerRepository } from './owner.repository';
import { Owner } from './owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner,OwnerRepository])],
  providers: [OwnerService],
})
export class OwnerModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { OwnerModule } from './owner/owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
@Module({
  imports: [CarModule, ManufacturerModule, OwnerModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private connection: Connection) {}
}

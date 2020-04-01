"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const car_entity_1 = require("../car/car.entity");
let CarRepository = class CarRepository extends typeorm_1.AbstractRepository {
    async saveorUpdateCar(car) {
        try {
            return await this.manager.save(car);
        }
        catch (error) {
            throw error;
        }
    }
    async find(ids) {
        try {
            return await this.manager.createQueryBuilder(car_entity_1.Car, 'car').innerJoinAndSelect('car.manufacturer', 'Manufacturer').innerJoinAndSelect('car.owners', 'Owner').where('car.id IN (:id)', { id: ids.split(',') }).getMany();
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteCar(car) {
        try {
            await this.manager.remove(car);
        }
        catch (error) {
            throw error;
        }
    }
};
CarRepository = __decorate([
    typeorm_1.EntityRepository(car_entity_1.Car)
], CarRepository);
exports.CarRepository = CarRepository;
//# sourceMappingURL=car.repository.js.map
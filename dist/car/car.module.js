"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const car_service_1 = require("./car.service");
const manufacturer_service_1 = require("../manufacturer/manufacturer.service");
const owner_service_1 = require("../owner/owner.service");
const car_repository_1 = require("./car.repository");
const manufacturer_repository_1 = require("../manufacturer/manufacturer.repository");
const owner_repository_1 = require("../owner/owner.repository");
const car_controller_1 = require("./car.controller");
const car_entity_1 = require("./car.entity");
const car_subscribers_1 = require("./car.subscribers");
let CarModule = class CarModule {
};
CarModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([car_entity_1.Car, car_repository_1.CarRepository, manufacturer_repository_1.ManufacturerRepository, owner_repository_1.OwnerRepository])],
        providers: [car_service_1.CarService, manufacturer_service_1.ManufacturerService, owner_service_1.OwnerService, car_subscribers_1.CarSubscriber],
        controllers: [car_controller_1.CarController]
    })
], CarModule);
exports.CarModule = CarModule;
//# sourceMappingURL=car.module.js.map
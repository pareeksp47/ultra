"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const car_service_1 = require("./car.service");
const car_entity_1 = require("./car.entity");
let CarController = class CarController {
    constructor(service) {
        this.service = service;
    }
    getCar(ids, isCarRequest) {
        try {
            return this.service.getCars(ids, isCarRequest);
        }
        catch (error) {
            console.log("Get Car :" + error);
        }
    }
    create(car) {
        try {
            this.service.saveCar(car);
            return car;
        }
        catch (error) {
            console.log("Create Car :" + error);
        }
    }
    update(car) {
        try {
            return this.service.updateCar(car);
        }
        catch (error) {
            console.log("Update Car :" + error);
        }
    }
    deleteUser(params) {
        try {
            return this.service.deleteCar(params.id);
        }
        catch (error) {
            console.log("Delete Car :" + error);
        }
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('ids')), __param(1, common_1.Query('isCarRequest')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "getCar", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_entity_1.Car]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_entity_1.Car]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "deleteUser", null);
CarController = __decorate([
    common_1.Controller('cars'),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map
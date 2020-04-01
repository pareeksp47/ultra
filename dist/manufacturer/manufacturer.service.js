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
const typeorm_1 = require("@nestjs/typeorm");
const manufacturer_repository_1 = require("./manufacturer.repository");
const uuid_1 = require("uuid");
let ManufacturerService = class ManufacturerService {
    constructor(manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }
    async saveManufacturer(manufacturer) {
        try {
            manufacturer.id = uuid_1.v4();
            return await this.manufacturerRepository.saveorUpdateManufacturer(manufacturer);
        }
        catch (error) {
            throw error;
        }
    }
    async updateManufacturer(manufacturer) {
        try {
            return await this.manufacturerRepository.saveorUpdateManufacturer(manufacturer);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteManufacturer(manufacturer) {
        try {
            await this.manufacturerRepository.deleteManufacturer(manufacturer);
        }
        catch (error) {
            throw error;
        }
    }
};
ManufacturerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(manufacturer_repository_1.ManufacturerRepository)),
    __metadata("design:paramtypes", [manufacturer_repository_1.ManufacturerRepository])
], ManufacturerService);
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturer.service.js.map
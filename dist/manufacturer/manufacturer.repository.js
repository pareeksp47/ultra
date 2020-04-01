"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
let ManufacturerRepository = class ManufacturerRepository extends typeorm_1.AbstractRepository {
    async saveorUpdateManufacturer(manufacturer) {
        try {
            return await this.manager.save(manufacturer);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteManufacturer(manufacturer) {
        try {
            await this.manager.remove(manufacturer);
        }
        catch (error) {
            throw error;
        }
    }
};
ManufacturerRepository = __decorate([
    typeorm_1.EntityRepository(manufacturer_entity_1.Manufacturer)
], ManufacturerRepository);
exports.ManufacturerRepository = ManufacturerRepository;
//# sourceMappingURL=manufacturer.repository.js.map
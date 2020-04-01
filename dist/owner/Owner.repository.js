"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const owner_entity_1 = require("./owner.entity");
let OwnerRepository = class OwnerRepository extends typeorm_1.AbstractRepository {
    async saveorUpdateOwners(owner) {
        try {
            return await this.manager.save(owner);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOwners(owners) {
        try {
            await this.manager.remove(owners);
        }
        catch (error) {
            throw error;
        }
    }
};
OwnerRepository = __decorate([
    typeorm_1.EntityRepository(owner_entity_1.Owner)
], OwnerRepository);
exports.OwnerRepository = OwnerRepository;
//# sourceMappingURL=Owner.repository.js.map
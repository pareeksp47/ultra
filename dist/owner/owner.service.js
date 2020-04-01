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
const Owner_repository_1 = require("./Owner.repository");
const uuid_1 = require("uuid");
let OwnerService = class OwnerService {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async saveOwners(owners) {
        try {
            owners.forEach((owner) => {
                owner.id = uuid_1.v4();
            });
            return await this.ownerRepository.saveorUpdateOwners(owners);
        }
        catch (error) {
            throw error;
        }
    }
    async updateOwners(owners) {
        try {
            return await this.ownerRepository.saveorUpdateOwners(owners);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOwner(owners) {
        try {
            await this.ownerRepository.deleteOwners(owners);
        }
        catch (error) {
            throw error;
        }
    }
};
OwnerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Owner_repository_1.OwnerRepository)),
    __metadata("design:paramtypes", [Owner_repository_1.OwnerRepository])
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map
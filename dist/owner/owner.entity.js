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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const car_entity_1 = require("../car/car.entity");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let Owner = class Owner extends typeorm_1.BaseEntity {
};
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ primary: true }),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Owner.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Owner.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Owner.prototype, "purchaseDate", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    typeorm_1.JoinColumn({ name: "car", referencedColumnName: "id" }),
    typeorm_1.ManyToOne(type => car_entity_1.Car, car => car.owners, {
        onDelete: "CASCADE",
        eager: true
    }),
    class_transformer_1.Type(() => car_entity_1.Car),
    __metadata("design:type", car_entity_1.Car)
], Owner.prototype, "car", void 0);
Owner = __decorate([
    typeorm_1.Entity()
], Owner);
exports.Owner = Owner;
//# sourceMappingURL=owner.entity.js.map
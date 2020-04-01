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
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
const owner_entity_1 = require("../owner/owner.entity");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let Car = class Car extends typeorm_1.BaseEntity {
    deepClone(o) {
        const copy = Object.assign({}, o);
        for (const key in copy) {
            if (typeof copy[key] === "object") {
                copy[key] = this.deepClone(copy[key]);
            }
        }
        return copy;
    }
};
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ primary: true }),
    __metadata("design:type", String)
], Car.prototype, "id", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => manufacturer_entity_1.Manufacturer),
    typeorm_1.OneToOne(type => manufacturer_entity_1.Manufacturer, { eager: true,
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({ name: "manufacturer", referencedColumnName: "id" }),
    __metadata("design:type", manufacturer_entity_1.Manufacturer)
], Car.prototype, "manufacturer", void 0);
__decorate([
    typeorm_1.Column("decimal", { precision: 5, scale: 2 }),
    class_validator_1.IsNumber(),
    __metadata("design:type", typeorm_1.Double)
], Car.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsString(),
    __metadata("design:type", Date)
], Car.prototype, "firstRegistrationDate", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    typeorm_1.OneToMany(type => owner_entity_1.Owner, owner => owner.car, { cascade: true }),
    class_transformer_1.Type(() => owner_entity_1.Owner),
    __metadata("design:type", Array)
], Car.prototype, "owners", void 0);
Car = __decorate([
    typeorm_1.Entity()
], Car);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map
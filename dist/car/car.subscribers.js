"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const car_entity_1 = require("./car.entity");
const owner_entity_1 = require("../owner/owner.entity");
let CarSubscriber = class CarSubscriber {
    listenTo() {
        return car_entity_1.Car;
    }
    async afterInsert(event) {
        console.log('AFTER ENTITY INSERTED: ' + event.entity);
        event.entity.owners.forEach(async (owner) => {
            console.log(await event.manager.getRepository(owner_entity_1.Owner).createQueryBuilder('owner').delete().from(owner_entity_1.Owner).where('owner.purchaseDate >= last_day(now()) + interval 1 day - interval 18 month').andWhere('owner.id = :id', { id: owner.id }).execute());
        });
        console.log("20==>" + await event.manager.getRepository(car_entity_1.Car).createQueryBuilder('car').update().set({ price: () => "price - (0.20 * price)" }).where('car.firstRegistrationDate >= last_day(now()) + interval 1 day - interval 12 month').andWhere(('car.firstRegistrationDate >= last_day(now()) + interval 1 day - interval 18 month')).andWhere('car.id = :id', { id: event.entity.id }).execute());
    }
};
CarSubscriber = __decorate([
    typeorm_1.EventSubscriber()
], CarSubscriber);
exports.CarSubscriber = CarSubscriber;
//# sourceMappingURL=car.subscribers.js.map
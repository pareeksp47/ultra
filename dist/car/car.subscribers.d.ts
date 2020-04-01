import { EntitySubscriberInterface, InsertEvent } from "typeorm";
import { Car } from "./car.entity";
export declare class CarSubscriber implements EntitySubscriberInterface<Car> {
    listenTo(): typeof Car;
    afterInsert(event: InsertEvent<Car>): Promise<void>;
}

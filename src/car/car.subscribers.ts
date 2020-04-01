import { EventSubscriber, EntitySubscriberInterface, InsertEvent, AfterInsert } from "typeorm";
import { Car } from "./car.entity";
import { Owner } from "../owner/owner.entity";
@EventSubscriber()
export class CarSubscriber implements EntitySubscriberInterface<Car> {
    
    listenTo() {
      return Car;
    }

    // Called after entity insertion
     async afterInsert(event: InsertEvent<Car>) {
        console.log('AFTER ENTITY INSERTED: '+ event.entity);

        
        
        event.entity.owners.forEach( async (owner) => {                
               console.log(await event.manager.getRepository(Owner).createQueryBuilder('owner').delete().from(Owner).where('owner.purchaseDate >= last_day(now()) + interval 1 day - interval 18 month').andWhere('owner.id = :id',{id : owner.id}).execute());
               
         });

         
          console.log("20==>"+await event.manager.getRepository(Car).createQueryBuilder('car').update().set({ price: () => "price - (0.20 * price)"}).where('car.firstRegistrationDate >= last_day(now()) + interval 1 day - interval 12 month').andWhere(('car.firstRegistrationDate >= last_day(now()) + interval 1 day - interval 18 month')).andWhere('car.id = :id',{id : event.entity.id}).execute());
        
    }

}
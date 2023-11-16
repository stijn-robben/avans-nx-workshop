import { Injectable, NotFoundException } from '@nestjs/common';
import { IMenuItem} from '@avans-nx-workshop/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class MenuItemService {
    TAG = 'MenuItemService';

    private menuitems$ = new BehaviorSubject<IMenuItem[]>([
        {
            id: "0",
            name: "Classic Burger",
            description: "A delicious classic burger with all the fixings.",
            price: 4.99,
            item_type: "burger",
            ingredients: ["beef patty", "lettuce", "tomato", "onion", "pickles"],
            allergens: ["wheat"],
            img_url: "https://stijnrobben.nl/img/menu-product1.png"
        }
          
    ]);

    getAll(): IMenuItem[] {
        Logger.log('getAll', this.TAG);
        return this.menuitems$.value;
    }

    getOne(id: string): IMenuItem {
        Logger.log(`getOne(${id})`, this.TAG);
        const menuitem = this.menuitems$.value.find((td) => td.id === id);
        if (!menuitem) {
            throw new NotFoundException(`Menuitem could not be found!`);
        }
        return menuitem;
    }

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(menuitem: Pick<IMenuItem, 'name' | 'description' | 'price' | 'item_type' | 'ingredients' | 'allergens'>): IMenuItem {
        Logger.log('create', this.TAG);
        const current = this.menuitems$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newMenuItem: IMenuItem = {
            ...menuitem,
            id: `menuitem-${Math.floor(Math.random() * 10000)}`,
            name: "Cheeseburger",
            description: "A cheese burger with fresh ingredients",
            price: 5.99,
            item_type: "burger",
            ingredients: ["beef patty", "lettuce", "tomato", "onion", "cheese", "pickles"],
            allergens: ["dairy", "wheat"],
            img_url: "https://stijnrobben.nl/img/menu-product2.png"

        };
        this.menuitems$.next([...current, newMenuItem]);
        return newMenuItem;
    }
}

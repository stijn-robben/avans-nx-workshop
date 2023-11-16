import { Injectable, NotFoundException } from '@nestjs/common';
import { IMenuItem} from '@avans-nx-workshop/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';
import { RouterModule } from '@angular/router';
@Injectable()
export class MenuItemService {
    TAG = 'MenuItemService';

    private menuitems$ = new BehaviorSubject<IMenuItem[]>([
        {
            id: "0",
            name: "Cheese Burger",
            description: "A delicious classic burger with all the fixings.",
            price: 6.99,
            item_type: "burger",
            ingredients: ["beef patty", "lettuce", "tomato", "onion", "pickles", "cheese"],
            allergens: ["wheat", "dairy"],
            img_url: "https://stijnrobben.nl/img/menu-product1.png"
        },{
            id: "1",
            name: "Bacon Burger",
            description: "Juicy beef patty topped with crispy bacon, fresh lettuce, ripe tomato, savory onion, zesty pickles, melted cheese, and our signature sauce on a toasted bun.",
            price: 7.99,
            item_type: "burger",
            ingredients: ["beef patty", "lettuce", "tomato", "onion", "pickles", "cheese", "bacon"],
            allergens: ["wheat", "dairy"],
            img_url: "https://stijnrobben.nl/img/menu-product2.png"
        },{
            id: "2",
            name: "Jalapeño burger",
            description: "Savor the heat with our Jalapeño Burger featuring a flavorful beef patty, crisp lettuce, juicy tomato, tangy onion, pickles, melted cheese, and a spicy kick from fresh jalapeños, all nestled in a soft bun.",
            price: 7.49,
            item_type: "burger",
            ingredients: ["beef patty", "lettuce", "tomato", "onion", "pickles", "cheese", "jalapeño"],
            allergens: ["wheat", "dairy"],
            img_url: "https://stijnrobben.nl/img/menu-product3.png"
        },{
            id: "3",
            name: "Chicken Burger",
            description: "Indulge in our Chicken Burger, a delightful combination of perfectly fried chicken, honey mustard drizzle, crisp lettuce, savory onion, and pickles, all embraced by a soft bun.",
            price: 7.99,
            item_type: "burger",
            ingredients: ["fried chicken", "honey mustard", "lettuce", "onion", "pickles"],
            allergens: ["wheat"],
            img_url: "https://stijnrobben.nl/img/menu-product4.png"
        },{
            id: "4",
            name: "Lamb Shank Burger",
            description: "Experience the richness of our Lamb Shank Burger, featuring a succulent lamb patty, fresh lettuce, tender courgette, pickled aubergine, and creamy feta cheese, all enveloped in a delightful bun.",
            price: 8.99,
            item_type: "burger",
            ingredients: ["lamb patty", "lettuce", "courgette", "aubergine", "feta cheese"],
            allergens: ["wheat", "dairy", "egg"],
            img_url: "https://stijnrobben.nl/img/menu-product5.png"
        },{
            id: "10",
            name: "Vegan cheeseburger",
            description: "Delight in our Vegan Cheeseburger, crafted with a flavorful vegan patty, crisp lettuce, ripe tomato, savory onion, tangy pickles, and gooey vegan cheese, all embraced by a soft, plant-based bun.",
            price: 6.99,
            item_type: "burger",
            ingredients: ["vegan patty", "lettuce", "tomato", "onion", "pickles", "vegan cheese"],
            allergens: ["wheat"],
            img_url: "https://stijnrobben.nl/img/menu-product11.png"
        },{
            id: "11",
            name: "Vegan bacon burger",
            description: "Savor the taste of our Vegan Bacon Burger, featuring a delectable vegan patty, crisp lettuce, juicy tomato, tangy onion, pickles, vegan cheese, and the smoky goodness of plant-based bacon, all in a vegan-friendly bun.",
            price: 7.49,
            item_type: "burger",
            ingredients: ["vegan patty", "lettuce", "tomato", "onion", "pickles", "vegan cheese", "vegan bacon"],
            allergens: ["wheat"],
            img_url: "https://stijnrobben.nl/img/menu-product12.png"
        },{
            id: "6",
            name: "8 Chicken wings",
            description: "Enjoy our 8 Chicken Wings, perfectly cooked and glazed with BBQ sauce, topped with fresh spring onions for a flavorful and satisfying side.",
            price: 6.99,
            item_type: "side",
            ingredients: ["chicken", "BBQ sauce", "spring onions"],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product8.png"
        },{
            id: "7",
            name: "9 Chicken nuggets",
            description: "Treat yourself to our 9 Chicken Nuggets, featuring bite-sized pieces of tender chicken, served with a side of hot sauce for a spicy and delightful side.",
            price: 4.99,
            item_type: "side",
            ingredients: ["chicken", "hot sauce"],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product9.png"
        }, {
            id: "8",
            name: "Loaded fries",
            description: "Indulge in our Loaded Fries, topped with seasoned beef, rich parmesan, and crispy potato fries for a satisfying and cheesy side.",
            price: 5.99,
            item_type: "side",
            ingredients: ["beef", "parmesan", "potato"],
            allergens: ["dairy"],
            img_url: "https://stijnrobben.nl/img/menu-product13.png"
        }, {
            id: "9",
            name: "5 Cheese balls",
            description: "Savor our 5 Cheese Balls, featuring golden-fried cheese delights served with a side of hot sauce for a cheesy and flavorful side.",
            price: 2.99,
            item_type: "side",
            ingredients: ["cheese", "hot sauce"],
            allergens: ["dairy"],
            img_url: "https://stijnrobben.nl/img/menu-product14.png"
        }, {
            id: "12",
            name: "Fries",
            description: "Savor the simplicity of our Classic Fries – golden and crispy potato delights, lightly salted for the perfect, timeless taste..",
            price: 3.99,
            item_type: "side",
            ingredients: ["potato", "mayonaise"],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product7.png"
        }, {
            id: "13",
            name: "Coca-Cola Regular",
            description: "Indulge in the timeless taste of Coca-Cola Regular, a refreshing and classic beverage that perfectly complements any meal. Served ice-cold, it's the ideal companion to elevate your dining experience.",
            price: 1.99,
            item_type: "drink",
            ingredients: [],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product15.png"
        }, {
            id: "14",
            name: "Sprite",
            description: "Quench your thirst with the effervescent and citrusy flavor of Sprite. Crisp, clear, and delightfully bubbly, Sprite is the perfect choice for a refreshing beverage that adds a zing to your meal.",
            price: 1.99,
            item_type: "drink",
            ingredients: [],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product16.png"
        }, {
            id: "15",
            name: "Water",
            description: "Stay hydrated with our pure and refreshing Water. Crisp and clean, it's the perfect choice for those who seek a simple and natural thirst-quencher to accompany their meal.",
            price: 1.49,
            item_type: "drink",
            ingredients: [],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product17.png"
        }, {
            id: "16",
            name: "Fanta",
            description: "Experience a burst of fruity goodness with Fanta. This vibrant and fizzy beverage combines the sweetness of assorted fruits, creating a delightful and uplifting drink that's perfect for any occasion.",
            price: 1.99,
            item_type: "drink",
            ingredients: [],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product18.png"
        }, {
            id: "17",
            name: "Red Bull",
            description: "Unleash your energy with the invigorating taste of Red Bull. Packed with caffeine and taurine, Red Bull provides a boost of vitality, making it the ideal pick-me-up for those who crave an extra kick.",
            price: 2.49,
            item_type: "drink",
            ingredients: [],
            allergens: [],
            img_url: "https://stijnrobben.nl/img/menu-product19.png"
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
            id: `${Math.floor(Math.random() * 10000)}`,
            name: "",
            description: "",
            price: 0.00,
            item_type: "",
            ingredients: [],
            allergens: [],
            img_url: ""
        };
        this.menuitems$.next([...current, newMenuItem]);
        return newMenuItem;
    }
}

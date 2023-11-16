import { Id } from './id.type';



// Voor nu is onze user een string; later zullen we hier een User object van maken.
type User = string;

export interface IMenuItem {
    id: Id;
    item_type: string;
    description: string;
    name: string;
    price: number;
    ingredients: string[];
    allergens: string[];
    img_url: string;
}

export type ICreateMenuItem = Pick<
    IMenuItem,
    'name' | 'description' | 'price' | 'item_type' | 'ingredients' | 'allergens'
>;
export type IUpdateMenuItem = Partial<Omit<IMenuItem, 'id'>>;
export type IUpsertMenuItem = IMenuItem;

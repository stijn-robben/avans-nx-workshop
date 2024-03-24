import { IsMongoId } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IMenuItem } from '@avans-nx-workshop/shared/api';

export type MenuItemDocument = MenuItem & Document;

@Schema()
export class MenuItem {
    @IsMongoId()
    id!: string;

    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    description!: string;

    @Prop({ required: true })
    price!: number;

    @Prop({ required: true })
    item_type!: string;

    @Prop([String])
    ingredients!: string[];

    @Prop([String])
    allergens!: string[];

    @Prop({ required: true })
    img_url!: string;
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
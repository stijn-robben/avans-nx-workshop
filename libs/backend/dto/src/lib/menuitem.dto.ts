import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsBoolean,
    IsOptional,
    IsDate,
    ArrayNotEmpty,
} from 'class-validator';
import {
    ICreateMenuItem,
    IUpdateMenuItem,
    IUpsertMenuItem
} from '@avans-nx-workshop/shared/api';

export class CreateMenuItemDto implements ICreateMenuItem {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsNotEmpty()
    price!: number;

    @IsString()
    @IsNotEmpty()
    item_type!: string;

    @IsString({ each: true })
    @IsNotEmpty()
    ingredients!: string[];

    @IsString({ each: true })
    @IsNotEmpty()
    allergens!: string[];

    @IsString()
    @IsNotEmpty()
    img_url!:string;


}

export class UpsertMenuItemDto implements IUpsertMenuItem {

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsNumber()
    @IsNotEmpty()
    price!: number;

    @IsString()
    @IsNotEmpty()
    item_type!: string;

    @IsString({ each: true })
    @IsNotEmpty()
    ingredients!: string[];

    @IsString({ each: true })
    @IsNotEmpty()
    allergens!: string[];

    @IsString()
    @IsNotEmpty()
    img_url!:string;
}

export class UpdateMenuItemDto implements IUpdateMenuItem {
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    price?: number;

    @IsString()
    @IsNotEmpty()
    item_type?: string;

    @IsString({ each: true })
    @IsNotEmpty()
    ingredients?: string[];

    @IsString({ each: true })
    @IsNotEmpty()
    allergens?: string[];

    @IsString()
    @IsNotEmpty()
    img_url?:string;
}

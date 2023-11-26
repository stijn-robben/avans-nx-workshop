import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate,
    IsNumber
} from 'class-validator';
import {
    ICreateUser,
    IUpdateMenuItem,
    IUpdateUser,
    IUpsertMenuItem,
    IUpsertUser,
} from '@avans-nx-workshop/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
// 'id' | 'first_name' | 'last_name' | 'password' | 'email' | 'streetname' | 'house_number' | 'date_of_birth' | 'role'
export class CreateUserDto implements ICreateUser {


    
    @IsString()
    @IsNotEmpty()
    first_name!: string;

    @IsString()
    @IsNotEmpty()
    last_name!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    streetname!: string;

    @IsNumber()
    @IsNotEmpty()
    house_number!: number;

    @IsDate()
    @IsNotEmpty()
    date_of_birth!:Date;

    @IsString()
    @IsNotEmpty()
    role!:string;

}

export class UpsertUserDto implements IUpsertUser {

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    first_name!: string;

    @IsString()
    @IsNotEmpty()
    last_name!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    streetname!: string;

    @IsNumber()
    @IsNotEmpty()
    house_number!: number;

    @IsDate()
    @IsNotEmpty()
    date_of_birth!:Date;

    
    @IsString()
    @IsNotEmpty()
    role!:string;
}

export class UpdateUserDto implements IUpdateUser {
    @IsString()
    @IsNotEmpty()
    first_name!: string;

    @IsString()
    @IsNotEmpty()
    last_name!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    streetname!: string;

    @IsNumber()
    @IsNotEmpty()
    house_number!: number;

    @IsDate()
    @IsNotEmpty()
    date_of_birth!:Date;

    @IsString()
    @IsNotEmpty()
    role!:string;
}

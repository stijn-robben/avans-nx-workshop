import { Id } from './id.type';

export interface IUser {
    id: Id;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    streetname: string;
    house_number: number;
    date_of_birth: Date;
    role: string;
}

export type ICreateUser = Pick<
    IUser,
    'first_name' | 'last_name' | 'password' | 'email' | 'streetname' | 'house_number' | 'date_of_birth' | 'role'
>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;

import { Id } from "./id.type";

export enum UserRole {
    Admin = 'admin',
    Member = 'member',
    Guest = 'guest',
  }
  
  
  export class IUser {
    _id:Id;
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    birthdate: Date | null;
    role: UserRole;
    postalCode: string;
    houseNumber: string; 
    phoneNumber: string; 
    token?: string | undefined;
  
    constructor(
      _id ='',
      firstName = '',
      lastName = '',
      emailAddress = '',
      password = '',
      birthdate: Date | null = null,
      role: UserRole = UserRole.Guest,
      postalCode = '', 
      houseNumber = '', 
      phoneNumber = '' 
    ) {
      this._id=_id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailAddress = emailAddress;
      this.password = password;
      this.birthdate = birthdate;
      this.role = role;
      this.postalCode = postalCode;
      this.houseNumber = houseNumber; 
      this.phoneNumber = phoneNumber; 
    }
  }
  
  export type ICreateUser = Pick<
    IUser,
    'firstName' | 'lastName' | 'emailAddress' | 'password' | 'birthdate' | 'role' |'postalCode'|'houseNumber'|'phoneNumber'
  >;
  export type IUpdateUser = Partial<Omit<IUser, '_id'>>;
  export type IUpsertUser = IUser;


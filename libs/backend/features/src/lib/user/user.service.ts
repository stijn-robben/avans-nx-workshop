import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser} from '@avans-nx-workshop/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';
import { RouterModule } from '@angular/router';
@Injectable()
export class UserService {
    TAG = 'UserService';
// 'id' | 'first_name' | 'last_name' | 'password' | 'email' | 'streetname' | 'house_number' | 'date_of_birth' | 'role'

    private user$ = new BehaviorSubject<IUser[]>([
        {
            id: "0",
            first_name: "Stijn",
            last_name: "Robben",
            password: "stijnswachtwoord",
            email: "stijnrobben@outlook.com",
            streetname: "Lovensdijkstraat",
            house_number: 12,
            date_of_birth: new Date("2005-04-17"),
            role: "admin"
        },{
            id: "1",
            first_name: "Jane",
            last_name: "Smith",
            password: "strongpass456",
            email: "jane.smith@gmail.com",
            streetname: "Main Street",
            house_number: 12,
            date_of_birth: new Date("1985-08-22"),
            role: "guest"
        },{
            id: "2",
            first_name: "Michael",
            last_name: "Johnson",
            password: "myp@ssword789",
            email: "michael.johnson@live.com",
            streetname: "Oak Avenue",
            house_number: 8,
            date_of_birth: new Date("1977-03-10"),
            role:"guest"
        },{
            id: "3",
            first_name: "Emily",
            last_name: "Williams",
            password: "emilyPass123",
            email: "emily.williams@gmail.com",
            streetname: "Cedar Lane",
            house_number: 20,
            date_of_birth: new Date("1995-12-05"),
            role:"guest"
        },{
            id: "4",
            first_name: "David",
            last_name: "Miller",
            password: "davidP@ssword",
            email: "david.miller@live.com",
            streetname: "Maple Street",
            house_number: 15,
            date_of_birth: new Date("1980-07-18"),
            role:"guest"
        },{
            id: "5",
            first_name: "Sophia",
            last_name: "Brown",
            password: "sophia456!",
            email: "sophia.brown@gmail.com",
            streetname: "Pine Road",
            house_number: 7,
            date_of_birth: new Date("1992-04-30"),
            role:"guest"
        }

          
    ]);

    getAll(): IUser[] {
        Logger.log('getAll', this.TAG);
        return this.user$.value;
    }

    getOne(id: string): IUser {
        Logger.log(`getOne(${id})`, this.TAG);
        const user = this.user$.value.find((td) => td.id === id);
        if (!user) {
            throw new NotFoundException(`User could not be found!`);
        }
        return user;
    }

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(user: Pick<IUser,'first_name' | 'last_name' | 'password' | 'email' | 'streetname' | 'house_number' | 'date_of_birth' | 'role'>): IUser {
        Logger.log('create', this.TAG);
        const current = this.user$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newUser: IUser = {
            ...user,
            id: `${Math.floor(Math.random() * 10000)}`,
            first_name: "",
            last_name: "",
            password: "",
            email: "",
            streetname: "",
            house_number: 0,
            date_of_birth: new Date("0000-00-00"),
            role:"guest"
        };
        this.user$.next([...current, newUser]);
        return newUser;
    }
}

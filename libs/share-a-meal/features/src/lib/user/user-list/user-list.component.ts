import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@avans-nx-workshop/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-workshop-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
    user: IUser[] | null = null;
    subscription: Subscription | undefined = undefined;

    constructor(private UserService: UserService) {}

    ngOnInit(): void {
        this.subscription = this.UserService.list().subscribe((results) => {
            this.user = results;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
}

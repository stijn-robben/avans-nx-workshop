import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemService } from '../menuitem.service';
import { IMenuItem } from '@avans-nx-workshop/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-workshop-menuitem-list',
    templateUrl: './menuitem-list.component.html',
    styleUrls: ['./menuitem-list.component.css'],
})
export class MenuItemListComponent implements OnInit, OnDestroy {
    menuitem: IMenuItem[] | null = null;
    subscription: Subscription | undefined = undefined;

    constructor(private menuitemService: MenuItemService) {}

    ngOnInit(): void {
        this.subscription = this.menuitemService.list().subscribe((results) => {
            console.log(`results: ${results}`);
            this.menuitem = results;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
}

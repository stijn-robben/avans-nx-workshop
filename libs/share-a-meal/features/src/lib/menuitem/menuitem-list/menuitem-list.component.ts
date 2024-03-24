import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemService } from '../menuitem.service';
import { IMenuItem } from '@avans-nx-workshop/shared/api';
import { Observable, Subscription, of, switchMap } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthService } from 'libs/share-a-meal/auth/src/lib/auth.service';

@Component({
    selector: 'avans-nx-workshop-menuitem-list',
    templateUrl: './menuitem-list.component.html',
    styleUrls: ['./menuitem-list.component.css'],
})
export class MenuItemListComponent implements OnInit, OnDestroy {
    menuitem: IMenuItem[] | null = null;
    subscription: Subscription | undefined = undefined;
    isAdmin$: Observable<boolean> | undefined;
    loading = true;
    constructor(private menuitemService: MenuItemService, private authService:AuthService) {
        this.isAdmin$ = this.authService.isAdmin$();
    }



      
  
    ngOnInit(): void {
        this.subscription = this.menuitemService.list().subscribe((results) => {
            console.log(results);
            this.menuitem = results;
            this.loading = false;
        });
    }
    deleteMenuItem(menuitemId: string): void {
      if (confirm('Weet je zeker dat je deze sportclub wilt verwijderen?')) {
        this.menuitemService.delete(menuitemId).pipe(
          switchMap(() => {
            if (this.menuitem) {
              return of(this.menuitem.filter(menuitem => menuitem.id !== menuitemId));
            } else {
              return of([]); 
            }
          })
        ).subscribe(updatedMenuItem => {
          this.menuitem = updatedMenuItem;
          console.log(`Deleted sportclub with ID: ${menuitemId}`);
        }, error => {
          console.error(`Error deleting menuitem: ${error}`);
        });
      }
    }
  
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    getCurrentUserRole(): string {
      return this.authService.getCurrentUserRole();
    }
  
  }
  


import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemService } from '../menuitem.service';
import { IMenuItem } from '@avans-nx-workshop/shared/api';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'avans-nx-workshop-menuitem-list',
    templateUrl: './menuitem-detail.component.html',
    styleUrls: ['./menuitem-detail.component.css'],
})
export class MenuItemDetailComponent implements OnInit, OnDestroy {
    menuitem: IMenuItem | null = null;
    subscription: Subscription | undefined = undefined;

    constructor(private route: ActivatedRoute, private menuitemService: MenuItemService) {}


    ngOnInit(): void {
        this.route.paramMap
          .pipe(
            // delay(1500),
            tap((params: ParamMap) => console.log('menuitem.id = ', params.get('id'))),
           
            switchMap((params: ParamMap) =>
              this.menuitemService.read(params.get('id'))
            ),
            tap(console.log)
          )
          .subscribe((results) => {
            this.menuitem = results;
          });
      }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    replaceArrayCommasWithSpaces(t: string[] | undefined | null): string {
      if (!t) {
        return '';
      }
    
      return t.join(', ').replace(/,/g, ', ');
    }

    allergenSymbols: { [key: string]: string } = {
      'dairy': '🧀',
      'wheat': '🌾',
      'egg': '🥚',
      // Add more allergens and their corresponding symbols as needed
    };

    replaceAllergensWithSymbols(allergens: string[] | undefined | null): string {
      if (!allergens) {
        return '';
      }
  
      return allergens.map(allergen => this.allergenSymbols[allergen] || allergen).join(', ');
    }
  }  
    


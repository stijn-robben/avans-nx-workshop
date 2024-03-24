import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemService } from '../menuitem.service';
import { IMenuItem } from '@avans-nx-workshop/shared/api';
import { Subscription, catchError, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-menuitem-list',
  templateUrl: './menuitem-edit.component.html',
})
export class MenuItemEditComponent implements OnInit, OnDestroy {
  menuitem: IMenuItem | null = null;

  subscription: Subscription | undefined = undefined;
    
  constructor(private route: ActivatedRoute, private menuitemService: MenuItemService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        switchMap(params => {
          const menuitemId = params.get('id');
          if (menuitemId) {
            return this.menuitemService.read(menuitemId);
          } else {
            return of(undefined); 
          }
        }),
        catchError(error => {
          console.error('Error fetching menuitem:', error);
          return of(undefined); 
        })
      )
      .subscribe(menuItemData => {
        if (menuItemData) {
          this.menuitem = menuItemData;
          console.log('Editing menuitem:', this.menuitem);
        } else {
          this.initializeNewMenuItem();
        }
      });
  }
  initializeNewMenuItem(): void {
    this.menuitem = {
      id: '',
      item_type: '',
      description: '',
      name: '',
      price: 0,
      ingredients: [''],
            allergens: [''],
      img_url: '',

    };
    console.log('Setting up new user template');
  }



  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  private convertToJson(): string {
    if (this.menuitem) {
      return JSON.stringify(this.menuitem);
    } else {
      return JSON.stringify({});
    }
  }


  save() {
    console.log('Hier komt de save actie');
    const jsonText = this.convertToJson();
    console.log('JSON Text:', jsonText);
    // You can now send the jsonText to your API or perform other actions as needed
    this.router.navigate(['/menu']);
  }


  cancel() {
    this.router.navigate(['/menu']);  }
}


  
  



import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemService } from '../menuitem.service';
import { IMenuItem } from '@avans-nx-workshop/shared/api';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-menuitem-list',
  templateUrl: './menuitem-edit.component.html',
})
export class MenuItemEditComponent implements OnInit, OnDestroy {
  menuitem: IMenuItem = {
    id: '',
    item_type: '',
    description: '',
    name: '',
    price: 0,
    ingredients: [''],
    allergens: [''],
    img_url: '',
  }; // Initialize menuitem with an empty object
  subscription: Subscription | undefined = undefined;
    
  constructor(private route: ActivatedRoute, private menuitemService: MenuItemService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) => console.log('menuitem.id = ', params.get('id'))),
        switchMap((params: ParamMap) => this.menuitemService.read(params.get('id'))),
        tap(console.log)
      )
      .subscribe((results) => {
        this.menuitem = results || {}; // Ensure results is not null or undefined
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  private convertToJson(): string {
    return JSON.stringify(this.menuitem);
  }


  save() {
    console.log('Hier komt de save actie');
    const jsonText = this.convertToJson();
    console.log('JSON Text:', jsonText);
    // You can now send the jsonText to your API or perform other actions as needed
    this.router.navigate(['../..'], { relativeTo: this.route });
  }


  cancel() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }
}

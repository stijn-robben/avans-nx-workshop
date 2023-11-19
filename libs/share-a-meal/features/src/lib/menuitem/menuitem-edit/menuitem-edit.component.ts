import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemService } from '../menuitem.service';
import { IMenuItem } from '@avans-nx-workshop/shared/api';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-menuitem-list',
  templateUrl: './menuitem-edit.component.html',
})
export class MenuItemEditComponent implements OnInit {
  menuitem: IMenuItem | null = null;
    subscription: Subscription | undefined = undefined;
    
    constructor(private route: ActivatedRoute, private menuitemService: MenuItemService, private router: Router,) {}

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

save() {
  console.log('Hier komt de save actie');
  this.router.navigate(['../..'], { relativeTo: this.route });
}

cancel() {
  this.router.navigate(['../..'], { relativeTo: this.route });
}
}


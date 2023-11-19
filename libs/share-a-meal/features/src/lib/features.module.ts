import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MenuItemListComponent } from './menuitem/menuitem-list/menuitem-list.component';
import { MenuItemDetailComponent } from './menuitem/menuitem-detail/menuitem-detail.component';
import { MenuItemService } from './menuitem/menuitem.service';
import { MenuItemEditComponent } from './menuitem/menuitem-edit/menuitem-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    UserComponent,
    HomeComponent,
    MenuItemListComponent,
    MenuItemDetailComponent,
    MenuItemEditComponent,
  ],
  providers: [MealService, MenuItemService],
  exports: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    HomeComponent,
    MenuItemListComponent,
    MenuItemDetailComponent,
  ],
})
export class FeaturesModule {}

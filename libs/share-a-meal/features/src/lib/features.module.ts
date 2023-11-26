import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { UserService } from './user/user.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MenuItemListComponent } from './menuitem/menuitem-list/menuitem-list.component';
import { MenuItemDetailComponent } from './menuitem/menuitem-detail/menuitem-detail.component';
import { MenuItemService } from './menuitem/menuitem.service';
import { MenuItemEditComponent } from './menuitem/menuitem-edit/menuitem-edit.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    HomeComponent,
    MenuItemListComponent,
    MenuItemDetailComponent,
    MenuItemEditComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  providers: [MealService, MenuItemService, UserService],
  exports: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    HomeComponent,
    MenuItemListComponent,
    MenuItemDetailComponent,
    UserDetailComponent,
    UserListComponent
  ],
})
export class FeaturesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
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
    AboutComponent,
    HomeComponent,
    MenuItemListComponent,
    MenuItemDetailComponent,
    MenuItemEditComponent,
  ],
  providers: [MenuItemService],
  exports: [
    AboutComponent,
    HomeComponent,
    MenuItemListComponent,
    MenuItemDetailComponent,
    MenuItemEditComponent
  ],
})
export class FeaturesModule {}

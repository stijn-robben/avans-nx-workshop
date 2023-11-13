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


@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    UserComponent,
    HomeComponent,
  ],
  providers: [MealService],
  exports: [MealListComponent, MealDetailComponent, AboutComponent, HomeComponent],
})
export class FeaturesModule {}

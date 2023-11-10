/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
import { MealDetailComponent } from 'libs/share-a-meal/features/src/lib/meal/meal-detail/meal-detail.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: MealDetailComponent,
    }
];

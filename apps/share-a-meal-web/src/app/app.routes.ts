/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
import { AboutComponent } from 'libs/share-a-meal/features/src/lib/about/about.component';
import { HomeComponent } from 'libs/share-a-meal/features/src/lib/home/home.component';


export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
    }
    
];

/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
import { AboutComponent } from 'libs/share-a-meal/features/src/lib/about/about.component';
import { HomeComponent } from 'libs/share-a-meal/features/src/lib/home/home.component';
import { MenuItemDetailComponent } from 'libs/share-a-meal/features/src/lib/menuitem/menuitem-detail/menuitem-detail.component';
import { MenuItemEditComponent } from 'libs/share-a-meal/features/src/lib/menuitem/menuitem-edit/menuitem-edit.component';
import { MenuItemListComponent } from 'libs/share-a-meal/features/src/lib/menuitem/menuitem-list/menuitem-list.component'
// import { UserDetailComponent } from 'libs/share-a-meal/features/src/lib/user/user-detail/user-detail.component';
// import { UserListComponent } from 'libs/share-a-meal/features/src/lib/user/user-list/user-list.component';
// import { UserEditComponent } from 'libs/share-a-meal/features/src/lib/user/user-edit/user-edit.component';
export const appRoutes: Route[] = [
    //  {
    //      path: 'user/new',
    //      component: UserEditComponent,
    //      pathMatch: 'full'
    //  },
    //  {
    //      path: 'user/edit/:id',
    //      component: UserEditComponent,
    //      pathMatch: 'full'
    //  },
    // {
    //     path: 'user/:id',
    //     component: UserDetailComponent,
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'user',
    //     component: UserListComponent,
    //     pathMatch: 'full'
    // },
    {
        path: 'menu/new',
        component: MenuItemEditComponent,
        pathMatch: 'full'
    },
    {
        path: 'menu/edit/:id',
        component: MenuItemEditComponent,
        pathMatch: 'full'
    },
    {
        path: 'menu/:id',
        component: MenuItemDetailComponent,
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuItemListComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: HomeComponent,
        pathMatch: 'full'
    }
];

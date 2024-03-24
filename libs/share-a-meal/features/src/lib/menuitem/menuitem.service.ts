import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IMenuItem } from '@avans-nx-workshop/shared/api';
import { Injectable } from '@angular/core';
import { GenericService } from '@avans-nx-workshop/share-a-meal/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthService } from 'libs/share-a-meal/auth/src/lib/auth.service';
@Injectable({
  providedIn: 'root'
})
export class MenuItemService extends GenericService<IMenuItem> {
  constructor(http: HttpClient,authService: AuthService) {
    super(http, '/menuitem',authService);
  }
}
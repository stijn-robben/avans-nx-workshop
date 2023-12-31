import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IMenuItem } from '@avans-nx-workshop/shared/api';
import { Injectable } from '@angular/core';

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */
export const httpOptions = {
  observe: 'body',
  responseType: 'json',
};

/**
 *
 *
 */
@Injectable()
export class MenuItemService {
  //endpoint = 'http://localhost:3000/api/meal';
  endpoint = 'https://cwfr-stijn-robben.azurewebsites.net/api/menuitem';

  constructor(private readonly http: HttpClient) {}

  /**
   * Get all items.
   *
   * @options options - optional URL queryparam options
   */
  public list(options?: any): Observable<IMenuItem[] | null> {
    console.log(`list ${this.endpoint}`);

    return this.http
      .get<ApiResponse<IMenuItem[]>>(this.endpoint, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        map((response: any) => response.results as IMenuItem[]),
        tap(console.log),
        catchError(this.handleError)
      );
  }

  /**
   * Get a single item from the service.
   *
   */
  // public read(id: string | null, options?: any): Observable<IMenuItem> {
  //   console.log(`read ${this.endpoint}`);
  //   return this.http
  //     .get<ApiResponse<IMenuItem>>(this.endpoint, {
  //       ...options,
  //       ...httpOptions,
  //     })
  //     .pipe(
  //       tap(console.log),
  //       map((response: any) => response.results as IMenuItem),
  //       catchError(this.handleError)
  //     );
  // }
  public read(id: string | null, options?: any): Observable<IMenuItem> {
    const url = this.endpoint + '/' + id;
    console.log(`read ${url}`);
    return this.http
        .get<ApiResponse<IMenuItem>>(url, {
            ...options,
            ...httpOptions,
        })
        .pipe(
            tap(console.log),
            map((response: any) => response.results as IMenuItem  ),
            catchError(this.handleError)
        );
}

  /**
   * Handle errors.
   */
  public handleError(error: HttpErrorResponse): Observable<any> {
    console.log('handleError in MenuItemService', error);

    return throwError(() => new Error(error.message));
  }
}
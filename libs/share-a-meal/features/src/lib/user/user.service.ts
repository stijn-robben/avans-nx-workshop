import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IUser } from '@avans-nx-workshop/shared/api';
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
export class UserService {
  //endpoint = 'http://localhost:3000/api/user';
  endpoint = 'https://cwfr-stijn-robben.azurewebsites.net/api/user';

  constructor(private readonly http: HttpClient) {}

  /**
   * Get all items.
   *
   * @options options - optional URL queryparam options
   */
  public list(options?: any): Observable<IUser[] | null> {
    console.log(`list ${this.endpoint}`);

    return this.http
      .get<ApiResponse<IUser[]>>(this.endpoint, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        map((response: any) => response.results as IUser[]),
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
  public read(id: string | null, options?: any): Observable<IUser> {
    const url = this.endpoint + '/' + id;
    console.log(`read ${url}`);
    return this.http
        .get<ApiResponse<IUser>>(url, {
            ...options,
            ...httpOptions,
        })
        .pipe(
            tap(console.log),
            map((response: any) => response.results as IUser  ),
            catchError(this.handleError)
        );
}

  /**
   * Handle errors.
   */
  public handleError(error: HttpErrorResponse): Observable<any> {
    console.log('handleError in UserService', error);

    return throwError(() => new Error(error.message));
  }
}
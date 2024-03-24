/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthService } from "libs/share-a-meal/auth/src/lib/auth.service";
import { IUser } from "@avans-nx-workshop/shared/api";
import { GenericService } from "@avans-nx-workshop/share-a-meal/common";

  @Injectable()
  export class UserService extends GenericService<IUser> {
    constructor( http: HttpClient,
      authService: AuthService) {
      super(http,'/user',authService);
    }
  }

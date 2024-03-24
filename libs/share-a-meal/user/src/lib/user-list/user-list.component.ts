// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthService } from 'libs/share-a-meal/auth/src/lib/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@avans-nx-workshop/shared/api';
import { Observable, Subscription, of, switchMap } from 'rxjs';
import { UserService } from '../user.service';
import { json } from 'stream/consumers';


@Component({
  selector: 'avans-nx-workshop-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: IUser[] | null = null;
  subscription: Subscription | undefined = undefined;
  IsAdmin$: Observable<boolean>;
  loading : boolean = true;

  constructor(private userService: UserService,private authService:AuthService) {
    this.IsAdmin$ = this.authService.isAdmin$();

  }

  ngOnInit(): void {
      this.subscription = this.userService.list().subscribe((results) => {
          console.log(' results: ' + JSON.stringify(results));
          this.users = results;
          this.loading = false;
      });
  }
  deleteUser(userId: string): void {
    if (confirm('Weet je zeker dat je deze gebruiker wilt verwijderen?')) {
      this.userService.delete(userId).pipe(
        switchMap(() => {
          if (this.users) {
            return of(this.users.filter(user => user._id !== userId));
          } else {
            return of([]); 
          }
        })
      ).subscribe(updatedUsers => {
        this.users = updatedUsers;
        console.log(`Deleted user with ID: ${userId}`);
      }, error => {
        console.error(`Error deleting user: ${error}`);
      });
    }
  }
  getCurrentUserRole(): string{
    return this.authService.getCurrentUserRole();
  }
  // private loadUsers(): void {
  //   this.subscription = this.userService.list().subscribe({
  //     next: (results) => {
  //       console.log(`results: ${results}`);
  //       this.users = results;
  //     },
  //     error: (error) => console.error(`Error loading users: ${error}`)
  //   });
  // }

  ngOnDestroy(): void {
      if (this.subscription) this.subscription.unsubscribe();
  }
}

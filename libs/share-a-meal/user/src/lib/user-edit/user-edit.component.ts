import { FormsModule } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser, UserRole } from '@avans-nx-workshop/shared/api';
import { Subscription, catchError, of, switchMap } from 'rxjs';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'avans-nx-workshop-user-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: IUser | null = null;
  hidePassword = true;
  subscription: Subscription | undefined;
  _birthdate!: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        switchMap(params => {
          const userId = params.get('id');
          if (userId) {
            return this.userService.read(userId);
          } else {
            return of(undefined); 
          }
        }),
        catchError(error => {
          console.error('Error fetching user:', error);
          return of(undefined); 
        })
      )
      .subscribe(userData => {
        if (userData) {
          this.user = userData;
          console.log('Editing user:', this.user);
          //converteer naar een string
          const birthdate = this.user.birthdate instanceof Date
          ? this.user.birthdate.toISOString()
          : this.user.birthdate;
          this._birthdate = this.formatDate(birthdate!);
        } else {
          this.initializeNewUser();
        }
      });
  }
  formatDate(isoDate: string): string {
    return new Date(isoDate).toISOString().split('T')[0];
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

onSubmit(): void {
  if (this.user) {
    console.log('Submitting user with ID:', this.user._id);
    of(this.user)
      .pipe(
        switchMap(user => {
          // Explicitly check for undefined or null instead of falsy
          if (user._id !== undefined && user._id !== null) {
            console.log('Updating user:', user);
            const updatedUser = this.userService.update(user._id,user);
            return updatedUser;
          } else {
            console.log('Creating user:', user);
            const newUser = this.userService.create(user);
            return newUser;
          }
        })
      )
      .subscribe({
        next: user => {
          // Adjust the log message here to reflect the action taken
          console.log(user._id !== undefined && user._id !== null ? 'User updated:' : 'User created:', user);
          this.goBack();
        },
        error: error => console.error('Error processing user:', error)
      });
  }
}

  
  onCancel(): void {
    this.goBack();
  }
  goBack(): void {
    this.router.navigate(['/users'], { relativeTo: this.route });
  }
  private initializeNewUser(): void {
    // Set up a new user template
    this.user = {
      _id: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      birthdate: null,
      role: UserRole.Guest,
      phoneNumber:'',
      houseNumber:'',
      postalCode:'',
    };
    console.log('Setting up new user template');
  }
}

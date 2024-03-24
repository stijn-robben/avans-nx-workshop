import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { IUser, UserRole } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-user-create',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-create.component.html',
  styleUrls: [],
})
export class UserCreateComponent {
  user: IUser = {
    _id: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    birthdate: null,
    role: UserRole.Guest,
    phoneNumber:'',
    postalCode:'',
    houseNumber:''
  };
  UserRole = UserRole;
  hidePassword = true;

  constructor(
    private userService: UserService,
    private router: Router ,
    private route: ActivatedRoute,
  ) {}

  onSubmit(ngForm: NgForm): void {
    if (ngForm.valid) {
      this.userService.create(this.user).subscribe({
        next: (newUser) => {
          console.log('User created:', newUser);
          this.goBack();
        },
        error: (error) => console.error('Error creating user:', error)
      });
    } else {
      ngForm.form.markAllAsTouched();
      console.error('Form is not valid');
    }
  }
  

  onCancel(): void {
    this.goBack();
  }
  goBack(): void {
    this.router.navigate(['/users'], { relativeTo: this.route });
  }
}

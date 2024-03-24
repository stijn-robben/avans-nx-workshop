/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser,UserRole } from '@avans-nx-workshop/shared/api';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

function postalCodeValidator(control: AbstractControl): { [key: string]: any } | null {
  const validPostalCode = /^\d{4}\s?[a-zA-Z]{2}$/;
  const input = control.value || '';
  if (!validPostalCode.test(input)) {
    return { 'postalCodeInvalid': true };
  }
  return null;
}

function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
  const validPhoneNumber = /^0[0-9]{9}$/;
  if (validPhoneNumber.test(control.value)) {
    return null; // valid
  }
  return { 'phoneNumberInvalid': true }; // invalid
}

function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
  const hasUpperCase = /[A-Z]/.test(control.value);
  const hasLowerCase = /[a-z]/.test(control.value);
  const hasNumber = /[0-9]/.test(control.value);
  const validLength = control.value.length >= 9;
  if (hasUpperCase && hasLowerCase && hasNumber && validLength) {
    return null; // valid
  }
  return { 'passwordInvalid': true }; // invalid
}

@Component({
  selector: 'avans-nx-workshop-register',
  templateUrl: './register.component.html',
  styleUrls: [],
})
export class RegisterComponent implements OnInit {
  UserRole = UserRole;
  registerForm!: FormGroup ;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      birthdate: [null, [Validators.required, this.dateNotTodayValidator]],
      role: [UserRole.Guest, Validators.required],
      phoneNumber: ['', [Validators.required, phoneNumberValidator]],
      postalCode: ['', [Validators.required, postalCodeValidator]],
      houseNumber: ['', Validators.required]

    });
    // // Luister naar wijzigingen in de postalCode en formatteer deze
    // this.registerForm.get('postalCode')?.valueChanges.subscribe(value => {
    //   if (value && !/^\d{4}\s?[a-zA-Z]{2}$/.test(value)) {
    //     const formatted = value.replace(/(\d{4})([a-zA-Z]{2})/, '$1 $2').toUpperCase();
    //     this.registerForm.get('postalCode')?.setValue(formatted, { emitEvent: false });
    //   }
    // });
  }
  dateNotTodayValidator(control: AbstractControl): { [key: string]: any } | null {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthdate = new Date(control.value);
    if (birthdate >= today) {
      return { 'birthdateInvalid': true };
    }
    return null;
  }
  onSubmit(): void {
    if (this.registerForm!.valid) {
      const user: IUser = this.registerForm!.value;
      this.authService.register(user).subscribe({
        next: (newUser) => {
          console.log('User created:', newUser);
          this.goBack();
        },
        error: (error) => console.error('Error creating user:', error)
      });
    } else {
      this.registerForm!.markAllAsTouched();
      console.error('Form is not valid');
    }
  }
  

  onCancel(): void {
    this.goBack();
  }
  goBack(): void {
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}

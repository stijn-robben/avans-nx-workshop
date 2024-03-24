import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent  {
  loginForm: FormGroup;
  errorMessage: string | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value); // Debugging
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { emailAddress, password } = this.loginForm.value;
    this.authService.login(emailAddress, password).subscribe({
      next: (user) => {
        console.log(user); // Debugging
        this.router.navigate(['/features/dashboard']);
      },
      error: (error) => {
        // Display the error message from the service
        this.errorMessage = error.message;
      }
    });
  }
}

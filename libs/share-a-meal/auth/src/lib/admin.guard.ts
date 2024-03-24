import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getUserFromStorage(); 
    console.log('Currentuser role: ',user?.role);
    if (user && user.role === 'admin') {
      console.log('Access granted to admin user.');
      return true;
    } else {
      console.log('Access denied - user is not an admin.');
      this.router.navigate(['/no-access']);
      return false;
    }
  }
}

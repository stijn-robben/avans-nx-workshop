import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-no-access',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.css'],
})
export class NoAccessComponent {}

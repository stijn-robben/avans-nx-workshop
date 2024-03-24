import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthService } from 'libs/share-a-meal/auth/src/lib/auth.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AdminGuard } from 'libs/share-a-meal/auth/src/lib/admin.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule,CommonModule,HttpClientModule, FormsModule],
  declarations: [UserListComponent, UserDetailComponent, UserEditComponent, UserCreateComponent],
  providers:[UserService,AuthService,AdminGuard],
  exports: [UserListComponent, UserDetailComponent, UserEditComponent, UserCreateComponent]
})
export class UserModule {}
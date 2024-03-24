import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
// const routes :Routes= [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'login'
//   },
//     {
//       path: 'login',
//       pathMatch: 'full',
//       component: LoginComponent
//     },
//     {
//       path: 'register',
//       pathMatch: 'full',
//       component: RegisterComponent
//     }
// ]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
        ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }

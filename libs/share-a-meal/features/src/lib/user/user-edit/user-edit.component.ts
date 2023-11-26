import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@avans-nx-workshop/shared/api';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-user-list',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: IUser = {
    id: ``,
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    streetname: "",
    house_number: 0,
    date_of_birth: new Date("0000-00-00"),
    role:"guest"
  }; 
  subscription: Subscription | undefined = undefined;
    
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) => console.log('user.id = ', params.get('id'))),
        switchMap((params: ParamMap) => this.userService.read(params.get('id'))),
        tap(console.log)
      )
      .subscribe((results) => {
        this.user = results || {}; // Ensure results is not null or undefined
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  private convertToJson(): string {
    return JSON.stringify(this.user);
  }


  save() {
    console.log('Hier komt de save actie');
    const jsonText = this.convertToJson();
    console.log('JSON Text:', jsonText);
    // You can now send the jsonText to your API or perform other actions as needed
    this.router.navigate(['/user']);
  }


  cancel() {
    this.router.navigate(['/user']);  }
}

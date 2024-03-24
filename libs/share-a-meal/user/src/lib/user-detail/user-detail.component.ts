import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription, switchMap, tap } from 'rxjs';
import { IUser } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [],
})
export class UserDetailComponent implements OnInit,OnDestroy{
  user :IUser | null = null;
  subscription : Subscription | undefined = undefined;
  loading = true;
  constructor(private userService :UserService, private route :ActivatedRoute){}
  
    ngOnInit(): void {
      console.log('we gaan één user ophalen')
      this.route.paramMap
        .pipe(
          // delay(1500),
          tap((params: ParamMap) => console.log('user.id = ', params.get('id'))),
          switchMap((params: ParamMap) => {
            return this.userService.read((params.get('id')));
          }),
          tap(console.log)
        )
        .subscribe((results) => {
          this.user = results;
          this.loading = false;
        });
    }
    ngOnDestroy(): void {
      if (this.subscription) this.subscription.unsubscribe();
    }
  }

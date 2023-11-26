import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@avans-nx-workshop/shared/api';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'avans-nx-workshop-user-list',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
    user: IUser | null = null;
    subscription: Subscription | undefined = undefined;

    constructor(private route: ActivatedRoute, private userService: UserService) {}


    ngOnInit(): void {
        this.route.paramMap
          .pipe(
            // delay(1500),
            tap((params: ParamMap) => console.log('user.id = ', params.get('id'))),
           
            switchMap((params: ParamMap) =>
              this.userService.read(params.get('id'))
            ),
            tap(console.log)
          )
          .subscribe((results) => {
            this.user = results;
          });
      }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    
  }  
    


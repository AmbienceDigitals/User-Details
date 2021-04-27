import { Injectable } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetails } from '../model/User';
import { load, payWithCard, payWithCardSuccess } from './actions';
import { UserDetailsQuery } from './selectors';

@Injectable()
export class UserDetailsPaymentFacade {
  readonly data$: Observable<UserDetails>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(UserDetailsQuery.getUserState));
  }

  getUserData(): void {
    this.store.dispatch(load());
  }

  makePayment(paymentData: UserDetails): void {
    this.store.dispatch(payWithCard({paymentData}));
  }

  storeCard(userData): void {
    this.store.dispatch(payWithCardSuccess(userData));
  }
}

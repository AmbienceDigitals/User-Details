
import { Action, createReducer, on } from '@ngrx/store';
import { UserDetails } from '../model/user';
import * as userPaymentActions from './actions';

export const featureKey = 'user';

export const initialUserState: UserDetails = {
  firstName: '',
  lastName: '',
  email: '',
  monthlyAdvertisingBudget: 0,
  phoneNumber: 0,
};

export interface PaymentState {
  isLoading?: boolean;
  error?: any;
  userData?: UserDetails;
}

export const initialState: PaymentState = {
  isLoading: false,
  error: null,
  userData: initialUserState
};


const featureReducer = createReducer(
  initialState,
  on(userPaymentActions.load, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(userPaymentActions.loadSuccess, (state, { userData }) => {
    return  {
      ...state,
      userData,
      isLoading: false,
      error: null
    };
  }),
  on(userPaymentActions.payWithCardSuccess, (state, { userData }) => ({
    ...state,
    userData,
    isLoading: false,
    error: null
  }))
);

export function reducer(state: PaymentState, action: Action) {
  return featureReducer(state, action);
}


import { createAction, props } from '@ngrx/store';
import { UserDetails } from '../model/User';

export enum UserPaymentActionType {
  LOAD_CREDIT_CARD = '[UserPayment] Load',
  LOAD_CREDIT_CARD_SUCCESS = '[UserPayment] Load Success',
  REFRESH = '[UserPayment] Refresh',
  PAY_WITH_CARD = '[UserPayment] Pay',
  PAY_WITH_CARD_SUCCESS = '[UserPayment] Payment Success',
  PAY_WITH_CARD_ERROR = '[UserPayment] Submit Success'
}

export const load = createAction(UserPaymentActionType.LOAD_CREDIT_CARD);

export const loadSuccess = createAction(
  UserPaymentActionType.LOAD_CREDIT_CARD_SUCCESS,
  props<{ userData: UserDetails }>()
);

export const payWithCard = createAction(
  UserPaymentActionType.PAY_WITH_CARD,
  props<{ paymentData: UserDetails }>()
);

export const payWithCardSuccess = createAction(
  UserPaymentActionType.PAY_WITH_CARD_SUCCESS,
  props<{ userData: UserDetails }>()
);

export const payWithCardError = createAction(
  UserPaymentActionType.PAY_WITH_CARD_SUCCESS,
  props<{ error: string }>()
);


export const refresh = createAction(UserPaymentActionType.REFRESH);


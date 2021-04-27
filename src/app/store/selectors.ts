import { createFeatureSelector, createSelector } from '@ngrx/store';

import { moduleFeatureKey } from '.';
import { UserDetails } from '../model/User';
import { featureKey, PaymentState } from './reducer';

export const selectUserState = (state): PaymentState => state[moduleFeatureKey][featureKey];
const getPaymentState = createSelector(selectUserState, state => state);
const getUserState = createSelector(selectUserState, state => state.userData);

export const UserDetailsQuery = {
  selectUserState,
  getUserState,
  getPaymentState
};

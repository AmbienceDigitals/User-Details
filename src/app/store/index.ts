
import * as fromUserPaymentStoreActions from './actions';
import * as fromUserPaymentStoreEffects from './effects';
import * as fromUserPaymentStoreSelectors from './selectors';
import * as fromUserPaymentStoreReducer from './reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { PaymentState } from './reducer';
export {
    UserPaymentStoreModule
} from './user-details';

export {
    fromUserPaymentStoreActions,
    fromUserPaymentStoreEffects,
    fromUserPaymentStoreSelectors,
    fromUserPaymentStoreReducer
};

export const moduleFeatureKey = 'payment';

export interface paymentModuleState {
  [fromUserPaymentStoreReducer.featureKey]: PaymentState;
}

export const initialModuleState: paymentModuleState = {
  [fromUserPaymentStoreReducer.featureKey]: fromUserPaymentStoreReducer.initialState,
};

export interface State {
  [moduleFeatureKey]: paymentModuleState;
}

export const selectFeature = createFeatureSelector<State, paymentModuleState>(moduleFeatureKey);

export const moduleReducers = new InjectionToken<ActionReducerMap<paymentModuleState>>(moduleFeatureKey, {
  factory: () => ({
    [fromUserPaymentStoreReducer.featureKey]: fromUserPaymentStoreReducer.reducer,
  })
});

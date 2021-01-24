import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPayment from '../reducer/payment.reducer';

export const selectPaymentState = createFeatureSelector<fromPayment.State>(
    fromPayment.paymentFeatureKey,
);

export const selectPayment = createSelector(
    selectPaymentState,
    (stateVal: fromPayment.State) => stateVal.pay
);
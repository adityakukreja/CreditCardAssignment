import { Action, createReducer, on } from '@ngrx/store';
import { Payment } from '../../paymentModel';
import * as PaymentActions from '../action/payment.actions';


export const paymentFeatureKey = 'payment';

export interface State {
  pay : Payment[];
}

export const initialState: State = {
  pay : []
};


export const paymentreducer = createReducer(
  initialState,
  on(PaymentActions.loadPayments,
    (state:State,{payment})=>
    ({...state,
    pay: [...state.pay,payment]}))

);

export function reducer(state : State | undefined, action: Action): any{

  return paymentreducer(state, action);
}


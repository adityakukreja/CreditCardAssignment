import { createAction, props } from '@ngrx/store';
import { Payment } from '../../paymentModel';

export const loadPayments = createAction(
  '[Payment] Load Payments',
  (payment : Payment) => ({payment})
);





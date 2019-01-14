import { from, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';

import {apiRequestMyBookings, IBookingsList} from '../../services/api';

import { Epic, Selector } from '../';

import { combineEpics } from 'redux-observable';

// ACTIONS
const actionCreator = actionCreatorFactory('MY_BOOKING');
export const requestMyBooking = actionCreator.async<undefined, IBookingsList, any>('REQUEST_MY_BOOKING');

// STATE
export interface IState {
	isRequestingBooking: boolean;
	bookings: any
}

const INITIAL_STATE: IState = {
	isRequestingBooking: false,
	bookings: [],
};

// SELECTOR
export const selectBookings: Selector<any> = ({ myBookings }) => myBookings.bookings;
export const selectIsRequestingBookings: Selector<boolean> = ({ myBookings }) => myBookings.isRequestingBooking;

export default reducerWithInitialState(INITIAL_STATE)
	.case(requestMyBooking.started, (state: IState) => ({ ...state, isRequestingBooking: true }))
	.cases([requestMyBooking.done, requestMyBooking.failed], (state: IState, bookings) => ({ ...state, isRequestingBooking: false, bookings }))
	.build();

// EFFECTS

const requestMyBookingEpic: Epic = (action$, state$) => action$.pipe(
	filter(requestMyBooking.started.match),
	mergeMap(() => from(apiRequestMyBookings()).pipe(
		map((bookings:any) => requestMyBooking.done(bookings)),
		catchError((error) => of(requestMyBooking.failed({ error }))),
	)),
);



export const epics = combineEpics(
	requestMyBookingEpic,
);

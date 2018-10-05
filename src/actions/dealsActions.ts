import { Deal } from '../models/Deal';
import { IAction } from './action';

export const SET_ALL_DEALS = 'SetAllDeals';
export type SET_ALL_DEALS = typeof SET_ALL_DEALS;
export const SET_FROM_TRIP = 'SetFromTrip';
export type SET_FROM_TRIP = typeof SET_FROM_TRIP;
export const SET_TO_TRIP = 'SetToTrip';
export type SET_TO_TRIP = typeof SET_TO_TRIP;

export class SetAllDeals implements IAction {
  public type: SET_ALL_DEALS;
  public payload: Deal[];
}

export function setAllDeals(deals: Deal[]): SetAllDeals {
  return {
    payload: deals,
    type: SET_ALL_DEALS,
  };
}

export class SetFromTrip implements IAction {
  public type: SET_FROM_TRIP;
  public payload: string;
}

export function setFromTrip(from: string): SetFromTrip {
  return {
    payload: from,
    type: SET_FROM_TRIP,
  };
}

export class SetToTrip implements IAction {
  public type: SET_TO_TRIP;
  public payload: string;
}

export function setToTrip(to: string): SetToTrip {
  return {
    payload: to,
    type: SET_TO_TRIP,
  };
}

export type DealActions = SetAllDeals | SetToTrip | SetFromTrip;

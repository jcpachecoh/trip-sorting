import { Deal } from '../models/Deal';
import { IAction } from './action';
import { DealService } from '../services/DealService';
import { getCities, getTripResults } from '../scripts/index';
import * as _ from 'lodash';

export const SET_ALL_DEALS = 'SetAllDeals';
export type SET_ALL_DEALS = typeof SET_ALL_DEALS;
export const SET_FROM_TRIP = 'SetFromTrip';
export type SET_FROM_TRIP = typeof SET_FROM_TRIP;
export const SET_TO_TRIP = 'SetToTrip';
export type SET_TO_TRIP = typeof SET_TO_TRIP;
export const SET_COMBO_CITIES = 'SetComboCities';
export type SET_COMBO_CITIES = typeof SET_COMBO_CITIES;
export const SET_TRIP_RESULTS = 'SetTripResults';
export type SET_TRIP_RESULTS = typeof SET_TRIP_RESULTS;
export const HANDLE_ERROR_PROMPT = 'handleErrorPrompt';
export type HANDLE_ERROR_PROMPT = typeof HANDLE_ERROR_PROMPT;
export const HANDLE_TRIP_FILTER_OPTION = 'handleTripFilterOption';
export type HANDLE_TRIP_FILTER_OPTION = typeof HANDLE_TRIP_FILTER_OPTION;
export const SET_ERROR_MESSAGE = 'SetErrorMessage';
export type SET_ERROR_MESSAGE = typeof SET_ERROR_MESSAGE;

export class SetAllDeals implements IAction {
  public type: SET_ALL_DEALS;
  public payload: Deal[];
}

export function setAllDeals(deals: Deal[]): SetAllDeals {
  return {
    payload: deals,
    type: SET_ALL_DEALS
  };
}

export class SetFromTrip implements IAction {
  public type: SET_FROM_TRIP;
  public payload: string;
}

export function setFromTrip(from: string): SetFromTrip {
  return {
    payload: from,
    type: SET_FROM_TRIP
  };
}

export class SetToTrip implements IAction {
  public type: SET_TO_TRIP;
  public payload: string;
}

export function setToTrip(to: string): SetToTrip {
  return {
    payload: to,
    type: SET_TO_TRIP
  };
}

export class SetComboCities implements IAction {
  public type: SET_COMBO_CITIES;
  public payload: string[];
}

export function setComboCities(cities: string[]): SetComboCities {
  return {
    payload: cities,
    type: SET_COMBO_CITIES
  };
}

export class SetTripResults implements IAction {
  public type: SET_TRIP_RESULTS;
  public payload: Deal[];
}

export function setTripResults(results: Deal[]): SetTripResults {
  return {
    payload: results,
    type: SET_TRIP_RESULTS
  };
}

export class HandleErrorPrompt implements IAction {
  public type: HANDLE_ERROR_PROMPT;
  public payload: string;
}

export function handleErrorPrompt(errorText: string): HandleErrorPrompt {
  return {
    payload: errorText,
    type: HANDLE_ERROR_PROMPT
  };
}

export class SetErrorMessage implements IAction {
  public type: SET_ERROR_MESSAGE;
  public payload: string;
}

export function setErrorMessage(errorText: string): SetErrorMessage {
  return {
    payload: errorText,
    type: SET_ERROR_MESSAGE
  };
}

export class HandleTripFilterOption implements IAction {
  public type: HANDLE_TRIP_FILTER_OPTION;
  public payload: string;
}

export function handleTripFilterOption(errorText: string): HandleTripFilterOption {
  return {
    payload: errorText,
    type: HANDLE_TRIP_FILTER_OPTION
  };
}

export function getComboCities(): any {
  return (dispatch: any) => {
    return DealService.GetDeals()
      .then((response: any) => {
        if (!response.ok) {
          const error = `There was an error ${response.status} ${response.statusText}`;
          dispatch(handleErrorPrompt(error));
        } else {
          return response.json();
        }
      })
      .then((data: any) => {
        const cities = getCities(data.deals);
        dispatch(setComboCities(cities));
      });
  };
}

export function submitForm(): any {
  return (dispatch: any, getState: Function) => {
    const state = getState(),
      from = state.dealsReducer.from,
      to = state.dealsReducer.to,
      parameter = state.dealsReducer.parameter,
      errormessage =
        _.isEmpty(from) || _.isEmpty(to)
          ? `Please complete the following empty staments ${_.isEmpty(state.from) ? 'From' : null}  ${
              _.isEmpty(state.to) ? 'To' : null
            } `
          : '';

    dispatch(setErrorMessage(errormessage));

    return DealService.GetDeals()
      .then((response: any) => {
        if (!response.ok) {
          const error = `There was an error ${response.status} ${response.statusText}`;
          dispatch(handleErrorPrompt(error));
        } else {
          return response.json();
        }
      })
      .then((data: any) => {
        let tripResults = data.deals.filter((item: Deal) => {
          return item.departure === from && item.arrival === to;
        });
        tripResults = parameter ? getTripResults(tripResults, parameter) : tripResults;
        dispatch(setTripResults(tripResults));
      });
  };
}

export type DealActions =
  | SetAllDeals
  | SetToTrip
  | SetFromTrip
  | SetComboCities
  | SetTripResults
  | HandleErrorPrompt
  | HandleTripFilterOption
  | SetErrorMessage;

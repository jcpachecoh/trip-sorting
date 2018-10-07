import { Deal } from '../models/Deal';
import * as _ from 'lodash';
import { Duration } from '../models/Duration';
export function getCities(deals: Deal[]) {
  return _.uniqBy(deals, 'arrival').map((item: any) => {
    return item.arrival;
  });
}

export function getTripResults(deals: Deal[], parameter: string) {
  switch (parameter) {
    case 'cheapest':
      return deals.sort((a, b) => {
        return a.cost - b.cost;
      });

    case 'fastest':
      return deals.sort((a, b) => {
        return convertToMinutes(a.duration) - convertToMinutes(b.duration);
      });
    default:
      return deals;
  }
}

function convertToMinutes(duration: Duration) {
  return duration.h * 60 + duration.m;
}

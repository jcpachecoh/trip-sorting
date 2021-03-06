export class DealService {
  static GetDeals(): Promise<any> {
    const url = `../api/response.json`;
    return fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
  }
}

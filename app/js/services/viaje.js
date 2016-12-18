import  { apiUrl } from '../constants';

class TripService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getCount() {
    return this.$http.get(`${apiUrl}viajes/count`);
  }

  getTrips(skip,limit,filter) {
    if(!filter)
      return this.$http.get(`${apiUrl}viajes/getReport?skip=${skip}&limit=${limit}`);
    return this.$http.get(`${apiUrl}viajes/getReport?filter=${JSON.stringify(filter)}`);
  }
}

export default {
  name: 'TripService',
  fn: TripService
};

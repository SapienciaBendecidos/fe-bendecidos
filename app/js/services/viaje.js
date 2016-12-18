import  { apiUrl } from '../constants';

class TripService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getCount() {
    return this.$http.get(`${apiUrl}viajes/count`);
  }

  getTripsCount(filter) {
    if(!filter)
      return this.$http.get(`${apiUrl}viajes/getReport/count`);
    return this.$http.get(`${apiUrl}viajes/getReport/count?filter=${filter}`);
  }

  getTrips(skip,limit,filter) {
    if(!filter)
      return this.$http.get(`${apiUrl}viajes/getReport?skip=${skip}&limit=${limit}`);
    return this.$http.get(`${apiUrl}viajes/getReport?filter=${filter}&skip=${skip}&limit=${limit}`);
  }
}

export default {
  name: 'TripService',
  fn: TripService
};

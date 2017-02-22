'use strict';

import  { apiUrl } from '../constants';

function UserService($http) {
  'ngInject';

  const service = {};

  // credentials: { email, passowrd }
  service.login = credentials => $http.post(`${apiUrl}users/login`, credentials);

  service.getUserById = id => $http.get(`${apiUrl}users/${id}`, id);

  service.logout = () => $http.post(`${apiUrl}Users/logout`);

  service.countUsers = () => $http.get(`${apiUrl}Users/count`);

  service.getUsers = filter => {
    if(!filter)
      return $http.get(`${apiUrl}Users`);
    return $http.get(`${apiUrl}Users?filter=${JSON.stringify(filter)}`);
  }

  service.postUser = (user) => $http.post(`${apiUrl}Users/replaceOrCreate`, user);
  service.deleteById = id => $http.delete(`${apiUrl}Users/${id}`);

  return service;
}

export default {
  name: 'UserService',
  fn: UserService
};

'use strict';

import  { apiUrl } from '../constants';

function UserService($http) {
  'ngInject';

  const service = {};

  // credentials: { email, passowrd }
  service.login = credentials => $http.post(`${apiUrl}users/login`, credentials);

  service.getUserById = id => $http.get(`${apiUrl}users/${id}`, id);

  service.logout = () => $http.post(`${apiUrl}Users/logout`);

  return service;
}

export default {
  name: 'UserService',
  fn: UserService
};

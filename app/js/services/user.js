'use strict';

import  { apiUrl } from '../constants';

function UserService($http) {
  'ngInject';

  const service = {};

  // credentials: { email, passowrd }
  service.login = credentials => $http.post(`${apiUrl}users/login`, credentials);

  service.getUserById = id => $http.get(`${apiUrl}users/${id}`, id);

  service.logout = accesToken => $http.post(`${apiUrl}users/logout`, accesToken);

  return service;
}

export default {
  name: 'UserService',
  fn: UserService
};

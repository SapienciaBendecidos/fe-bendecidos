import  { apiUrl } from '../constants';

function UserService($http) {
  'ngInject';

  const service = {};

  // credentials: { email, passowrd}
  service.login = (credentials) => $http.post(`${apiUrl}users/login`, credentials);
  return service;
}

export default {
  name: 'UserService',
  fn: UserService
};

import  { apiUrl } from '../constants';

function UserService($http) {
  'ngInject';

  const service = {};

  // credentials: { email, passowrd}
  service.login = function(credentials) {

    let url = `${apiUrl}users/login`;

    return new Promise((resolve, reject) => {
      $http.post(url, credentials)
      .success((data) => {
        resolve(data);
      })
      .error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;
}

export default {
  name: 'UserService',
  fn: UserService
};

import  { apiUrl } from '../constants';

function ClientService($http) {
  'ngInject';

  const service = {};

  service.countClients = () => $http.get(`${apiUrl}clientes/count`);

  service.getClients = (limit, skip) =>
    $http.get(`${apiUrl}clientes?filter[limit]=${limit}&filter[skip]=${skip}`);

  // client: { "primerNombre, segundoNombre, primerApellido, segundoApellido }
  service.postClients = (client) => $http.post(`${apiUrl}clientes`, client);
  return service;
}

export default {
  name: 'ClientService',
  fn: ClientService
};

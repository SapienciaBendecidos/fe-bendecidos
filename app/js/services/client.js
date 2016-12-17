import  { apiUrl } from '../constants';

function ClientService($http) {
  'ngInject';

  const service = {};

  service.countClients = () => $http.get(`${apiUrl}clientes/count`);

  service.getClients = filter => {
    if(!filter)
      return $http.get(`${apiUrl}clientes`);
    return $http.get(`${apiUrl}clientes?filter=${JSON.stringify(filter)}`);
  }


  // client: { "primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, saldo }
  // service.postClient = (client) => $http.post(`${apiUrl}clientes/createClient`, client);
  
  // client: { "primerNombre, segundoNombre, primerApellido, segundoApellido, telefono }
  service.postClient = (client) => $http.post(`${apiUrl}clientes`, client);
  return service;
}

export default {
  name: 'ClientService',
  fn: ClientService
};

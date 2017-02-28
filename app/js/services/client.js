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

  service.getClientsWithSaldo = (limit,skip,filter) => {
    if(!filter)
      return $http.get(`${apiUrl}clientes/getWithSaldo?limit=${limit}&skip=${skip}`);
    return $http.get(`${apiUrl}clientes/getWithSaldo?filter=${JSON.stringify(filter)}`);
  }

  service.getClientsWithEquipoServicio = (limit,skip,filter) => {
    if(!filter)
      return $http.get(`${apiUrl}clientes?filter[limit]=${limit}&filter[skip]=${skip}`);
    // falta el include
    return $http.get(`${apiUrl}clientes?filter={"where":${JSON.stringify(filter)}}`);
  }
  service.postClient = (client) => $http.post(`${apiUrl}clientes/`, client);
  service.deleteById = id => $http.delete(`${apiUrl}clientes/${id}`);

  service.getClientById = id => $http.get(`${apiUrl}clientes/${id}`);
  service.getCards = id => $http.get(`${apiUrl}clientes/${id}/tarjetas`);
  return service;
}

export default {
  name: 'ClientService',
  fn: ClientService
};

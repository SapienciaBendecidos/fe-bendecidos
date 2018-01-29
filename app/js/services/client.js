import  { apiUrl } from '../constants';

function ClientService($http) {
  'ngInject';

  const service = {};

  service.countClients = () => $http.get(`${apiUrl}students/count`);

  service.getClients = (limit, skip, filter) => {
    const filters = {where: filter, limit, skip}
    if(filter === '' || !filter)
      return $http.get(`${apiUrl}students?filter[limit]=${limit}&filter[skip]=${skip}`);
    return $http.get(`${apiUrl}students?filter=${JSON.stringify(filters)}`);
  }

  service.postClient = (client) => $http.post(`${apiUrl}students/`, client);
  service.deleteById = id => $http.delete(`${apiUrl}students/${id}`);

  service.sortClients = (limit, skip, filter, prop, dir) => {
    if(filter === '' || !filter)
      return $http.get(`${apiUrl}students?filter[limit]=${limit}&filter[skip]=${skip}&filter[order]=${prop} ${dir}`);
    return $http.get(`${apiUrl}students?filter=${JSON.stringify(filter)}&filter[limit]=${limit}&filter[skip]=${skip}&filter[order]=${prop} ${dir}`);
  };
  service.updateClient = (client) => $http.patch(`${apiUrl}students/`, client);
  service.getClientById = id => $http.get(`${apiUrl}students/${id}`);
  service.getCards = id => $http.get(`${apiUrl}students/${id}/tarjetas`);
  return service;
}

export default {
  name: 'ClientService',
  fn: ClientService
};

import  { apiUrl } from '../constants';

function ClientService($http) {
  'ngInject';

  const service = {};

  /*
	[
	  {
	    "idCliente": 0,
	    "primerNombre": "string",
	    "segundoNombre": "string",
	    "primerApellido": "string",
	    "segundoApellido": "string"
	  }
	]
  */
  service.getClients = () => $http.get(`${apiUrl}clientes`);

  // client: { "primerNombre,segundoNombre,primerApellido,segundoApellido}
  service.postClients = (client) => $http.post(`${apiUrl}clientes`, client);
  return service;
}

export default {
  name: 'ClientService',
  fn: ClientService
};
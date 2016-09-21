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
  service.clients = () => $http.get(`${apiUrl}clientes`);

  // client: { "primerNombre,segundoNombre,primerApellido,segundoApellido}
  service.clients = (client) => $http.post(`${apiUrl}clientes`, client);
  return service;
}

export default {
  name: 'ClientService',
  fn: ClientService
};
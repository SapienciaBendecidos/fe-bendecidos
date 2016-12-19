'use strict';

import { apiUrl } from '../constants';

function RutasService($http) {
	'ngInject';

	const service = {};

	service.countRutas = () => $http.get(`${apiUrl}rutas/count`);

	service.getRutas = filter => {
	    if(!filter)
	      return $http.get(`${apiUrl}rutas`);
	    return $http.get(`${apiUrl}rutas?filter=${JSON.stringify(filter)}`);
  	}

  	service.postRuta = (rutas) => $http.post(`${apiUrl}rutas/replaceOrCreate`, rutas);

  	return service;
}

export default {
	name: 'RutasService',
	fn: RutasService
}
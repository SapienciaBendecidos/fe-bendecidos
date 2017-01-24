'use strict';

import  { apiUrl } from '../constants';

function CardService($http) {
  'ngInject';

  const service = {};
  service.getCards = () => $http.get(`${apiUrl}tarjetas`);
  service.getCardsByClient = clientId => $http.get(`${apiUrl}clientes/${clientId}/tarjetas`);

  //{ idTarjeta, estado ...}
  service.updateCard = data => $http.patch(`${apiUrl}tarjetas`, data);

  service.postCard = data => $http.post(`${apiUrl}tarjetas`, data);
  return service;
}

export default {
  name: 'CardService',
  fn: CardService
};

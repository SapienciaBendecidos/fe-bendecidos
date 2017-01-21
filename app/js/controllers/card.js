'use strict';

function CardController($stateParams) {
	'ngInject';

	console.log('Hola ' + $stateParams.clientId);
}

export default {
  name: 'CardController',
  fn: CardController
};
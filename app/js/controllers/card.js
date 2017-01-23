'use strict';

function CardController(client, cards) {
	'ngInject';
	let vm = this;
	vm.client = client.data;
 	vm.cards = cards.data;
	vm.name = `${vm.client.primerNombre} ${vm.client.primerApellido}`;
	vm.focusedCard = null;

	vm.setFocus = card =>  vm.focusedCard = card;

	vm.edit = () => {
		console.log('edit');
	}
}

export default {
  name: 'CardController',
  fn: CardController
};

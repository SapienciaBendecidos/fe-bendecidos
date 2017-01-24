'use strict';

function CardController(client, cards, CardService) {
	'ngInject';
	let vm = this;
	vm.client = client.data;
 	vm.cards = cards.data;
	vm.name = `${vm.client.primerNombre} ${vm.client.primerApellido}`;
	vm.focusedCard = null;
	vm.state = false;

	vm.setFocus = card =>  {
		vm.focusedCard = card;
		vm.state = vm.focusedCard.estado == 'Activo';
	};

	vm.edit = () => {
		let estado = vm.state ? 'Activo' : 'Inactivo';
		let data = Object.assign({}, vm.focusedCard);
		data.estado = estado;
		let promise = CardService.updateCard(data);

		promise.then(() => Materialize.toast('Tarjeta modificada'));
		promise.catch(() => Materialize.toast('Error al guardar tarjeta'));
		promise.finally(() => vm.loadCards());
	}

	vm.loadCards = () => {
		let promise = CardService.getCardsByClient(vm.focusedCard.idCliente);
		promise.then(response => vm.cards = response.data);
	}
}

export default {
  name: 'CardController',
  fn: CardController
};

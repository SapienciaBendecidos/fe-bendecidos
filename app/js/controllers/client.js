'use strict';

//import showClientsMaterialize from '../jQuery/views/showClients';

function ClientController(ClientService) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.clients = [];
  vm.perPage = 10;
  vm.currentPos = 0;

  vm.loadClients = (perPage, currentPos) => {
  	let page = {perPage,currentPos};
  	let promise = ClientService.getClients(page);
    console.log({perPage,currentPos});

  	promise.then(response => {
  		//let {idClient,primerNombre,segundoNombre,primerApellido,segundoApellido} = response.data;
  		vm.clients = response.data;
  		vm.perPage = vm.perPage;
  		vm.currentPos = vm.currentPosl;
  	});
  };

  loadClients(10,0);
}

export default {
  name: 'ClientController',
  fn: ClientController
};

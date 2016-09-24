'use strict';

//import showClientsMaterialize from '../jQuery/views/showClients';

function ClientController(ClientService, $q) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.clients = [];
  vm.perPage = 10;
  vm.pages = 0;
  vm.range = [];
  vm.activePage = 0;

  vm.getClients = (page) => {
    let skip = page * vm.perPage;
    let limit = skip + vm.perPage;
    return ClientService.getClients(limit, skip);
  };

  vm.loadClients = () =>  vm.getClients(vm.activePage)
  .then(response => vm.clients = response.data);

  vm.handlePageControlClick = (event) => {
    let active = event.currentTarget.attributes['data-active'].value;
    if(active.toLowerCase() === 'false')
      return;

    let control = event.currentTarget.attributes['data-control'].value;
    let page = parseInt(vm.activePage);
    vm.activePage = control === 'foward' ? page + 1 : page - 1;
    vm.loadClients();
  }

  vm.handlePageIndexClick = (event) => {
    vm.activePage = event.currentTarget.attributes['data-index'].value;
    vm.loadClients();
  }

  vm.getClientCount = () => ClientService.countClients();

  let getCount   = vm.getClientCount(),
      getClients = vm.getClients(0);

  $q.all([getCount, getClients]).then( responses => {
    let { count } = responses[0].data;
    vm.pages = Math.ceil(count/vm.perPage);
    vm.range = [];

    for (let i = 0; i < vm.pages; i++)
      vm.range.push(i);

    vm.clients = responses[1].data;
  });
}

export default {
  name: 'ClientController',
  fn: ClientController
};

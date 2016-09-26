'use strict';

function ClientController(ClientService, $q) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.clients = [];
  vm.pages = 0;
  vm.perPage = 100;
  vm.range = [];
  vm.activePage = 0;
  vm.clientForm = {};

  vm.getFullName = (client) => {
    let fullname = '';
    let keys = Object.keys(client);
    for (var i = 1; i < 5; ++i)
      fullname += [client[keys[i]]] + ' ';
    return fullname;
  };

vm.getClients = (page) => {
  let skip = page * vm.perPage,
      limit = vm.perPage,
      include = ['tarjetas'];
  return ClientService.getClients({ limit, skip, include });
};

vm.loadClients = () =>  vm.getClients(vm.activePage)
.then(response => vm.clients = response.data.map(mapClient));

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
vm.postClient = (client) => ClientService.postClient(client);

vm.searchClients = () => {
  let regexp = `/${vm.search}/`;
  let where =
  { or :
    [
      { primerNombre: { regexp } },
      { segundoNombre: { regexp } },
      { primerApellido: { regexp } },
      { segundoApellido: { regexp } },
      { telefono: { regexp } }
    ]
  };
  let include = ['tarjetas'];
  let promise = ClientService.getClients({ include, where});
  promise.then( response =>  vm.clients = response.data.map(mapClient));
  promise.catch( () => Materialize.toast('Error al realizar busqueda', 5000));
};

const mapClient = client => {
  if(client.tarjetas[0])
    client.saldo = client.tarjetas[0].saldo;
  else
    client.saldo = 0;

  return client;
}

vm.submitClient = (form) => {
  console.log(form.$valid);
  console.log(vm.post);

  let { firstname, middlename, lastname, secondLastname, phone, money } = vm.post;
  let client = {
    primerNombre: firstname,
    segundoNombre: middlename ? middlename : '',
    primerApellido: lastname,
    segundoApellido: secondLastname ? secondLastname : '',
    telefono: phone,
    saldo: money,
  };

  let promise = vm.postClient(client);
  promise.then(() => Materialize.toast('Cliente agregado exitosamente', 5000));
  promise.catch(() => Materialize.toast('Error al agregar cliente', 5000));
  vm.post = {};
}

let getCount   = vm.getClientCount(),
getClients = vm.getClients(0);

$q.all([getCount, getClients]).then( responses => {
  let { count } = responses[0].data;
  vm.pages = Math.ceil(count/vm.perPage);
  vm.range = [];

  for (let i = 0; i < vm.pages; i++)
  vm.range.push(i);

  vm.clients = responses[1].data.map(mapClient);
});
}

export default {
  name: 'ClientController',
  fn: ClientController
};

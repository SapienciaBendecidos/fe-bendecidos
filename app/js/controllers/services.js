'use strict';

function ServicesController(ServicesService, $q) {
    'ngInject';

    const vm = this;
    vm.services = [];
    vm.pages = 0;
    vm.perPage = 100;
    vm.range = [];
    vm.activePage = 0;
    vm.focusedService = {};
    vm.serviceForm = {};

    vm.getServiceCount = () => ServicesService.countServices();

    vm.setFocusedService = id => vm.focusedService = vm.getServiceById(id);

    vm.deleteById = id => ServicesService.deleteById(id);

    vm.postService = (service) => ServicesService.postService(service);

    vm.putService = (service) => ServicesService.putService(service);

    vm.edit = () => {
        let promise = vm.putService(vm.focusedService);
        promise.then(() => {
            Materialize.toast('Servicio editado exitosamente',5000);
            vm.loadServices();
        });
        promise.catch(() => {
            Materialize.toast('Error al editar servicio',5000);
            vm.loadServices();
        });
    }

    vm.getServiceById = id => {
        for (let i = 0; i < vm.services.length; ++i)
          if(vm.services[i].id == id) {
              let service = vm.services[i];
              return  {
                    id: service.id,
                    nombre: service.nombre,
                    creado_por: service.creado_por
              }
          }
    }

    vm.delete = () => {
        let promise = vm.deleteById(vm.focusedService.id);
        promise.then(() => {
            Materialize.toast('Servicio eliminado exitosamente', 5000);
            vm.loadServices();
        });
        promise.catch(() => {
            Materialize.toast('Error al eliminar servicio', 5000);
            vm.loadServices();
        });
    }

    vm.getServices = (page) => {
        let skip = page * vm.perPage,
        limit = vm.perPage;
        return ServicesService.getPagedServices(limit,skip);
    };

    vm.loadServices = () =>  vm.getServices(vm.activePage)
    .then(response => vm.services = response.data);

    vm.getServiceName = (service) => {
        if(service.nombre)
            return service.nombre;
    };

    vm.handlePageControlClick = (event) => {
        let active = event.currentTarget.attributes['data-control'].value;
        if(active.toLowerCase() === 'false')
        return;

        let control = event.currentTarget.attributes['data-control'].value;
        let page = parseInt(vm.activePage);
        vm.activePage = control === 'foward' ? page + 1 : page - 1;
        vm.loadServices();
    }

    vm.handlePageIndexClick = (event) => {
        vm.activePage = event.currentTarget.attributes['data-index'].value;
        vm.loadServices();
    }

    vm.submitService = () => {
        let { name } = vm.post;
        let service = {
            nombre: name
        };

        let promise = vm.postService(service);
        promise.then(() => {
            Materialize.toast('Servicio agregado exitosamente', 5000);
            vm.loadServices();
        });
        promise.catch(() => {
            Materialize.toast('Error al agregar servicio', 5000);
            vm.loadServices();
        });
        vm.post = {};
    }

    let getCount   = vm.getServiceCount(),
        getService = vm.getServices(0);

    $q.all([getCount, getService]).then( responses => {
        let { count } = responses[0].data;
        vm.pages = Math.ceil(count/vm.perPage);
        vm.range = [];

        for (let i = 0; i < vm.pages; i++)
            vm.range.push(i);

        vm.services = responses[1].data
    });
}

export default {
  name: 'ServicesController',
  fn: ServicesController
  };

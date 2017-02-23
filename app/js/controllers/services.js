'use strict';

function ServicesController(ServicesService) {
    'ngInject';

    const vm = this;
    vm.services = [
        { name: 'servicio1', id: 1 },
        { name: 'servicio2', id: 2 },
        { name: 'servicio3', id: 3 },
        { name: 'servicio4', id: 4 },
        { name: 'servicio5', id: 5 },
        { name: 'servicio6', id: 6 }
        ];
    vm.pages = 0;
    vm.perPage = 100;
    vm.range = [];
    vm.activePage = 0;
    vm.focusedService = {};
    vm.serviceForm = {};

    vm.getServiceCount = () => ServicesService.countServices();

    vm.setFocusedService = id => vm.focusedService = vm.getServiceById(id);

    vm.deleteById = id => ServicesService.deleteById(id);

    vm.edit = () => {
        let promise = vm.postService(vm.focusedService);
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

    vm.getServiceName = (service) => {
        return service.name;
    };
}

export default {
  name: 'ServicesController',
  fn: ServicesController
  };
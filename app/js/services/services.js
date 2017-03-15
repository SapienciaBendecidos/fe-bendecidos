import { apiUrl } from '../constants';

function ServicesService($http) {

    'ngInject';

    const service = {};

    service.countServices = () => $http.get(`${apiUrl}equiposservicios/count`);

    service.postService = (service) => $http.post(`${apiUrl}equiposservicios/`, service);
    service.putService = (service) => $http.put(`${apiUrl}equiposservicios/${service.id}`, service);

    service.deleteById = id => $http.delete(`${apiUrl}equiposservicios/${id}`);

    service.getServiceId = id => $http.get(`${apiUrl}equiposservicios/${id}`);

    service.getServices = filter => {
        if(!filter)
            return $http.get(`${apiUrl}equiposservicios`);
        return $http.get(`${apiUrl}equiposservicios?filter=${JSON.stringify(filter)}`);
    }

    service.getPagedServices = (limit, skip) => {
        return $http.get(`${apiUrl}equiposservicios?limit=${limit}&skip=${skip}`);
    }

  return service;
}

export default {
    name: 'ServicesService',
    fn: ServicesService
};

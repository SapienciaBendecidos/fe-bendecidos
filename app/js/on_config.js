import customInterceptors from './interceptors/index';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push(...customInterceptors);

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Login', {
    url: '/',
    params: { redirected: false },
    controller: 'LoginController as ctrl',
    templateUrl: 'login.html',
    title: 'Login'
  })
  .state('Client',{
    url: '/clientes',
    controller: 'ClientController as ctrl',
    templateUrl: 'cliente.html',
    title: 'Clientes'
  })
  .state('Rutas', {
    url: '/rutas',
    params: { redirected: false },
    controller: 'RutasController as ctrl',
    templateUrl: 'ruta.html',
    title: 'Rutas'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

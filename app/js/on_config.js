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
    controller: 'LoginController as ctrl',
    templateUrl: 'login.html',
    title: 'Login'
  })
  .state('Client',{
    url: '/clientes',
    controller: 'ClientController as client',
    templateUrl: 'cliente.html',
    title: 'Clientes'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;


function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'LoginController as home',
    templateUrl: 'login.html',
    title: 'Home'
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

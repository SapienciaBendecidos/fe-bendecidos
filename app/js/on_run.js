function OnRun($rootScope, AppSettings, $state, SessionService) {
  'ngInject';

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
    if (Object.keys(localStorage.getItem('session')).length >= 1 && toState.name != 'Login') {
        $('#sidebar-ico').removeClass('hidden');
    }
  });

  $rootScope.$on('$stateChangeStart', function(event, toState){
    let session = SessionService.getSession();

    if(!session && toState.name !== 'Login'){
      event.preventDefault();
      $state.go('Login', { redirected: true });
    }
 })

 
 setInterval(() => {
   let session = SessionService.getSession();
   if($state.current.name !== 'Login' && !session){
     $state.go('Login', { redirected: true });
   }
 }, 3000);

 $('.navList li').click(function() {
  // $state.go('Login', { redirected: true })
    var isValid = $(this).hasClass('State');
    if (isValid) {
      $state.go($(this).attr('id'), {redirected: true});
      $('#mySidenavN').addClass('hidden');
    }
  });
}

export default OnRun;
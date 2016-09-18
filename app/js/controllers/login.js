'use strict';

import loginMaterialize from '../jQuery/views/login';

function LoginController(UserService, $timeout) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.username = '';
  vm.password = '';
  vm.loginFailed = false;
  vm.loading     = false;

  vm.login = (email, password) =>{
    let credentials = {email, password};
    let promise = UserService.login(credentials);

    promise.then(vm.handleLoginSuccess, vm.handleLoginFail);
  };

  vm.handleLoginFail    = () => vm.hideLoader(true);
  vm.handleLoginSuccess = () => vm.hideLoader(false);

  vm.handleClick = (form) => {
    if (!form.$valid || vm.loading)
      return;

      vm.showLoader();
      vm.login(vm.username, vm.password);
  };

  vm.showLoader = () => {
    vm.loginFailed = false;
    vm.loading     = true;
  }

  vm.hideLoader = loginFailed =>
      $timeout(() => {
        vm.loginFailed = loginFailed;
        vm.loading     = false;

        //TODO: redirect on login success
        if(!loginFailed)
          window.alert('Login success, take me somewhere else pl0x :v');
      }, 1250);
  loginMaterialize.init();
}

export default {
  name: 'LoginController',
  fn: LoginController
};

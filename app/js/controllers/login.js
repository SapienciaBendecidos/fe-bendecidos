'use strict';

import loginMaterialize from '../jQuery/views/login';

function LoginController(UserService) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.username = '';
  vm.password = '';

  vm.login = (email, password) =>{
    let credentials = {email, password};
    let promise = UserService.login(credentials);

    //TODO: handle login success, and login fail
    promise.then( () =>  window.alert('login success'), response => window.alert(response.error.message) );
  };

  vm.handleLogin = (form) => {
    if (!form.$valid)
      return;

      vm.login(vm.username, vm.password);
  };

  loginMaterialize.init();
}

export default {
  name: 'LoginController',
  fn: LoginController
};

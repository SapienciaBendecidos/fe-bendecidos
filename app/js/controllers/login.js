'use strict';

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
    promise.then( response => console.log(response), response => window.alert(response.error.message) );
  };

  vm.handleLogin = () => {
    if (vm.username.length > 0 && vm.password.length > 0) {     
      console.log(vm.username);
      console.log(vm.password);
      vm.login(vm.username, vm.password);
    }
  };

  //vm.login('coco.napky@gmail.com', '21251122');
}

export default {
  name: 'LoginController',
  fn: LoginController
};

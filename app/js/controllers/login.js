'use strict';

function LoginController(UserService) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.login = (email, password) =>{
    let credentials = {email, password};
    let promise = UserService.login(credentials);

    //TODO: handle login success, and login fail
    promise.then( response => console.log(response), response => window.alert(response.error.message) );
  };

  vm.login('coco.napky@gmail.com', '21251122');
}

export default {
  name: 'LoginController',
  fn: LoginController
};

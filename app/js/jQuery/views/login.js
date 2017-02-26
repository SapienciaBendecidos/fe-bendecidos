'use strict';

import $ from 'jquery';

let login = {};

login.init = () => {
  let $email    = $('input[name=email]'),
      $password = $('input[name=password]'),
      $loginBtn = $('button[name=btn_login]');

  $email.on('change invalid', () => {
    let textfield = $email[0];
    textfield.setCustomValidity('');

    if (!textfield.validity.valid) {
      let message = textfield.value ? 'Ingrese un correo valido' : 'Ingrese su correo';
      textfield.setCustomValidity(message);
    }
  });

  $password.keyup(() => $password[0].setCustomValidity(''));

  $loginBtn.click(() => {
    let textfield = $password[0];
    textfield.setCustomValidity('');

    if(!textfield.value)
       textfield.setCustomValidity('Ingrese su contraseña');
  });
}

export default login;

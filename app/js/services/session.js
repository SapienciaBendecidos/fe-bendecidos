'use strict';

import store from 'store';

class SessionService {

  // { userId, email, token }
  setSession(session){
    store.set('session', session);
  }

  getSession(){
    store.get('session');
  }
}

export default {
  name: 'SessionService',
  fn: SessionService
};

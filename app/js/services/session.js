'use strict';

import store from 'store';

class SessionService {

  // { userId, email, accessToken, ttl }
  setSession(session){
    store.set('session', session);
  }

  getSession(){
    return store.get('session');
  }
  
}

export default {
  name: 'SessionService',
  fn: SessionService
};

const tokenInterceptor = (SessionService) => {
  'ngInject';

  return {
    request: function(config) {
      let session = SessionService.getSession();
      if(session && session.accessToken)
        config.headers.authorization = session.accessToken;
      return config;
    }
  }
}

export default tokenInterceptor;

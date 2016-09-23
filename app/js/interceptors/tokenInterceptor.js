const tokenInterceptor = (SessionService) => {
  'ngInject';

  return {
    request: function(config) {
      let { accessToken } = SessionService.getSession();
      if(accessToken)
        config.headers.authorization = accessToken;
      return config;
    }
  }
}

export default tokenInterceptor;

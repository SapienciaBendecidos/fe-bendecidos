const logInterceptor = () => {
  'ngInject';

  return {
    request: function(config) {
      if (process.env.NODE_ENV !== 'production')
        console.log(config);
      return config;
    }
  }
}

export default logInterceptor;

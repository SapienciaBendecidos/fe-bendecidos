const logInterceptor = () => {
    'ngInject';

    return {
        request: function(config) {
            if (process.env.NODE_ENV !== 'production') {
                return config;
            }
        }
    }
}

export default logInterceptor;
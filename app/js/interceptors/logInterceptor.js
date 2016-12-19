const logInterceptor = () => {
    'ngInject';

    return {
        request: function(config) {
            if (process.env.NODE_ENV !== 'production') {
                if (Object.keys(localStorage.getItem('session')).length >= 1) {
                    $('#main-nav').removeClass('hidden');
                    $('#mySidenavN').removeClass('hidden');
                }
                return config;
            }
        }
    }
}

export default logInterceptor;
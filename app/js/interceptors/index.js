const bulk = require('bulk-require');
const interceptors = bulk(__dirname, ['./**/!(*index|*.spec).js']);

export default Object.keys(interceptors).map( key => interceptors[key].default);

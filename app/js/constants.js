let url = 'localhost';
let port = '3000';

//let url = 'fiasps.unitec.edu';
//let port = '8060';

if(!url)
	throw new Error('EBENEZER_API_URL Environment Variable not set');

if(!port)
	throw new Error('EBENEZER_API_PORT Environment Variable not set');

export const apiUrl   = `http://${url}:${port}/api/`;
export const appTitle = 'Ebenezer';

const AppSettings = {
  appTitle,
  apiUrl
};

export default AppSettings;

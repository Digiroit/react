export const domain = 'http://localhost:8000';
export const version = '/api/v1';

export const authRoute = '/auth';
export const searchRoute = '/search';


export const signupEndpoint = `${domain}${version}${authRoute}/signup`;
export const loginEndpoint = `${domain}${version}${authRoute}/login`;
export const searchEndpoint = `${domain}${version}${searchRoute}`;

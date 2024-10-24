import { api } from '.';
export const signInUser = (data) => api.post('/user/sign-in/', data);
export const logoutUser = () => api.post('/user/logout/');

import { post } from './index';
import { RegisterUser, LoginUser, UserChange } from '../helpers/interfaces/request_interfaces/Auth';

export const signUp = (url: string, body: RegisterUser) => post<string>(url, JSON.stringify(body));

export const changeUserData = (url: string, body: UserChange, token: string) => (
  post<string>(url, JSON.stringify(body), token)
);

export const signIn = (url: string, body: LoginUser) => post<string>(url, JSON.stringify(body));

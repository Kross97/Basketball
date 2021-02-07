import { post } from './index';
import { IRegisterUser, ILoginUser, IUserChange } from '../helpers/interfaces/requestInterfaces/Auth';

export const signUp = (url: string, body: IRegisterUser) => post<string>(url, JSON.stringify(body));

export const changeUserData = (url: string, body: IUserChange, token: string) => (
  post<string>(url, JSON.stringify(body), token)
);

export const signIn = (url: string, body: ILoginUser) => post<string>(url, JSON.stringify(body));

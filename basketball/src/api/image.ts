import { post } from './index';

export const saveImage = (url: string, body: FormData, token: string) => (
  post<object>(url, body, token)
);

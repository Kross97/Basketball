import { post, remove } from './index';

export const saveImage = (url: string, body: FormData, token: string) => (
  post<object>(url, body, token)
);

export const deleteImage = (url: string, token: string) => remove(url, token);

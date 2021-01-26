import { IRequestBaseBody } from '../helpers/interfaces/request_interfaces/RequestBase';
import { RequestGenericType } from '../helpers/types/types';

const base = process.env.REACT_APP_URL;

// multipart/form-data - для картинки

const request = async (url: string, data: IRequestBaseBody, token: string | undefined) => {
  const headers = token
    ? {
      Authorization: `Bearer ${token}`,
    } : { };
  const response = await fetch(url, {
    ...data,
    // @ts-ignore
    headers: {
      ...headers,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  if (response.ok) {
    const typeResponse = response.headers.get('Content-Type');
    let result;
    if (typeResponse === 'application/text') {
      result = await response.text();
      return result;
    }
    result = await response.json();
    return result;
  }
  return { isError: true, status: response.status };
};

export const get = (url: string, token?: string) => request(`${base}${url}`, { method: 'GET' }, token);

export function post<T extends RequestGenericType>(url: string, body: T, token?: string) {
  return request(`${base}${url}`, { method: 'POST', body }, token);
}

export const remove = (url: string, token: string) => request(`${base}${url}`, { method: 'DELETE' }, token);

export function put<T extends RequestGenericType>(url: string, body: T, token: string) {
  return request(`${base}${url}`, { method: 'PUT', body }, token);
}

const base = process.env.REACT_APP_URL;

// multipart/form-data - для картинки

const request = async (url: string, data: any, token: string | undefined) => {
  const headers = token
    ? {
      Authorization: `Bearer ${token}`,
    } : { };
  try {
    const response = await fetch(url, {
      ...data,
      headers: {
        ...headers,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Error', error);
  }
};

export const get = (url: string, token?: string) => request(`${base}${url}`, { method: 'GET' }, token);

export function post<T>(url: string, body: T, token?: string) {
  return request(`${base}${url}`, { method: 'POST', body }, token);
}

export const remove = (url: string, token: string) => request(`${base}${url}`, { method: 'DELETE' }, token);

export function put<T>(url: string, body: T, token: string) {
  return request(`${base}${url}`, { method: 'PUT', body }, token);
}

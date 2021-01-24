const base = process.env.REACT_APP_URL;

export const request = async (url: string, data: any, token: string | undefined) => {
  const headers = token
    ? {
      Authorization: `Bearer ${token}`,
    } : {};
  try {
    const response = await fetch(url, {
      ...data,
      ...headers,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Error', error);
  }
};

export const get = (url: string, token?: string) => request(`${base}${url}`, { method: 'GET' }, token);

export const post = (url: string, body: any, token?: string) => request(`${base}${url}`, { method: 'POST', body }, token);

export const remove = (url: string, token: string) => request(`${base}${url}`, { method: 'DELETE' }, token);

export const put = (url: string, body: any, token: string) => request(`${base}${url}`, { method: 'PUT', body }, token);

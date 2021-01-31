interface ISignRequestErrors {
  [key: number]: string;
}

export const signRequestErrors: ISignRequestErrors = {
  400: 'one of the fields has an invalid value',
  401: 'You are not logged in, log in',
  403: 'invalid username or password',
  409: 'user with this username is already registered',
  500: 'server error, please try again later',
  502: 'server error, please try again later',
};

interface ISignRequestErrors {
  [key: number]: string;
}

export const signRequestErrors: ISignRequestErrors = {
  400: 'One of the fields has an invalid value',
  401: 'You are not logged in, log in',
  403: 'User with the specified username / password was not found.',
  409: 'User with this username is already registered',
  500: 'Server error, please try again later',
  502: 'Server error, please try again later',
};

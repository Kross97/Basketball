interface SignRequestErrors {
  [key: number]: string;
}

export const signRequestErrors: SignRequestErrors = {
  400: 'one of the fields has an invalid value',
  403: 'invalid username or password',
  409: 'user with this username is already registered',
};

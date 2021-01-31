interface IErrors {
  [key: number]: string;
}

export const imageRequestErrors: IErrors = {
  400: 'image or format is not correct',
  401: 'You are not logged in, log in',
  500: 'server error, please try again later',
  502: 'server error, please try again later',
};

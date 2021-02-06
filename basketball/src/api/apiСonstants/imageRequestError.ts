interface IErrors {
  [key: number]: string;
}

export const imageRequestErrors: IErrors = {
  400: 'Image or format is not correct',
  401: 'You are not logged in, log in',
  500: 'Server error, please try again later',
  502: 'Server error, please try again later',
};

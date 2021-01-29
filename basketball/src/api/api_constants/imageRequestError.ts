interface IErrors {
  [key: number]: string;
}

export const imageRequestErrors: IErrors = {
  400: 'image or format is not correct',
  500: 'server error, please try again later',
};

interface IErrors {
  [key: number]: string;
}

export const imageRequestErrors: IErrors = {
  400: 'image or format is not correct',
};

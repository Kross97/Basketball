interface IFormErrors {
  [key: string]: string;
}

export const formAddErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  validate: 'This value cannot be entered',
};

export const formSignErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  validate: 'Password and repeat password are not the same',
};

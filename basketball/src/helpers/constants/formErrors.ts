interface IFormErrors {
  [key: string]: string;
}

export const FormAddPlayerErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  validate: 'This value cannot be entered',
};

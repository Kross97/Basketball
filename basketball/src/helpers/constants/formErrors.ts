interface IFormErrors {
  [key: string]: string;
}

export const formAddPlayersErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  validate: 'Player must be 18 years old',
};

export const formAddTeamsErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  validate: 'The year of foundation is incorrect',
};

export const formSignErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  validate: 'Password and repeat password are not the same',
};

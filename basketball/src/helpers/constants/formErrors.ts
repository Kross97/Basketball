interface IFormErrors {
  [key: string]: string;
}

export const formAddPlayersErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  minLength: 'Invalid short value',
  maxLength: 'The value is too long',
  isCorrectDate: 'There is no such date',
  isNotYoung: 'Player must be 18 years old',
  isNotOld: 'The player is very old',
  isNotHeavy: 'The player is too heavy',
  isNotEasy: 'The player is too light',
  isNotVeryHeight: 'The player is too tall',
  isNotVeryLow: 'The player is too low',
};

export const formAddTeamsErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  minLength: 'Invalid short value',
  maxLength: 'The value is too long',
  isNotYoung: 'The year of creation has not yet arrived',
  isNotOld: 'A year too old for basketball',
};

export const formSignErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  minLength: 'Value of at least 3 characters',
  maxLength: 'The value is too long',
  validate: 'Password and repeat password are not the same',
  custom: 'Wrong password. Please, try again.',
};

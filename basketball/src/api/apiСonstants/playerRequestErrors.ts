interface IPlayerRequestErrors {
  [key: number]: string;
}

export const playerRequestErrors: IPlayerRequestErrors = {
  400: 'Fields player or id are not correct',
  401: 'You are not logged in, log in',
  404: 'Command not found',
  409: 'Player with this player name is already registered',
  500: 'Server error, please try again later',
  502: 'Server error, please try again later',
};

interface IPlayerRequestErrors {
  [key: number]: string;
}

export const playerRequestErrors: IPlayerRequestErrors = {
  400: 'fields player or id are not correct',
  401: 'You are not logged in, log in',
  404: 'command not found',
  409: 'player with this player name is already registered',
  500: 'server error, please try again later',
  502: 'server error, please try again later',
};

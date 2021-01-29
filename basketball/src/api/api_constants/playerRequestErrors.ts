interface IPlayerRequestErrors {
  [key: number]: string;
}

export const playerRequestErrors: IPlayerRequestErrors = {
  400: 'fields player are not correct',
  404: 'command not found',
  409: 'player with this player name is already registered',
  500: 'server error, please try again later',
};

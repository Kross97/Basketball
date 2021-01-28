interface IPlayerRequestErrors {
  [key: number]: string;
}

export const playerRequestErrors: IPlayerRequestErrors = {
  400: 'data player are not correct',
  404: 'command nor found',
  409: 'player with this tplayer name is already registered',
};

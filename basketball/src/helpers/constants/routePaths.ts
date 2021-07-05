interface IRoutePath {
  [key: string]: string;
}

export const routePaths: IRoutePath = {
  signIn: '/',
  signUp: '/signUp',
  mainArgs: '/main/:path',
  teams: '/main/teams',
  teamItem: '/main/teams/:id',
  teamAdd: '/main/teams/addTeam',
  teamUpdate: '/main/teams/addTeam/:id',
  playerItem: '/main/players/:id',
  players: '/main/players',
  playerAdd: '/main/players/addPlayer',
  playerUpdate: '/main/players/addPlayer/:id',
  changeUser: '/main/change',
};

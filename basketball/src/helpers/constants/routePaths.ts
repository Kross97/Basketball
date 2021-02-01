interface IRoutePath {
  [key: string]: string;
}

export const routePaths: IRoutePath = {
  signUp: '/',
  signIn: '/signIn',
  mainBase: '/main',
  mainArgs: '/main/:path',
  teams: '/main/teams',
  teamItem: '/main/teams/:id',
  teamAdd: '/main/teams/addTeam',
  teamUpdate: '/main/teams/addTeam/:id',
  playerItem: '/main/players/:id',
  players: '/main/players',
  playerAdd: '/main/players/addPlayer',
  playerUpdate: '/main/players/addPlayer/:id',
};

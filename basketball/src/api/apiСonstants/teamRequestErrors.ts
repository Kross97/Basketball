interface ITeamRequestErrors {
  [key: number]: string;
}

export const teamRequestErrors: ITeamRequestErrors = {
  400: 'Data command or id are not correct',
  401: 'You are not logged in, log in',
  409: 'Team with this team name is already registered',
  500: 'Server error, please try again later',
  502: 'Server error, please try again later',
};

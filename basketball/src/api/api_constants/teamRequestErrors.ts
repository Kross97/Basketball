interface ITeamRequestErrors {
  [key: number]: string;
}

export const teamRequestErrors: ITeamRequestErrors = {
  400: 'data command are not correct',
  401: 'You are not logged in, log in',
  409: 'team with this team name is already registered',
  500: 'server error, please try again later',
};

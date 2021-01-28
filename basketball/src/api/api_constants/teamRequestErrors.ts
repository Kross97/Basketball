interface ITeamRequestErrors {
  [key: number]: string;
}

export const teamRequestErrors: ITeamRequestErrors = {
  400: 'data command are not correct',
  409: 'team with this team name is already registered',
};

import teamLogo from '../../static/storybook_mock_images/mock_team.svg';

export interface ITeam {
  name: string,
  foundationYear: number,
  division: string,
  conference: string,
  imageUrl: string,
  id: number,
}

export const Team: ITeam = {
  name: 'Denver Nuggets',
  foundationYear: 1976,
  division: 'Northwestern',
  conference: 'Western',
  imageUrl: `${teamLogo}`,
  id: 1,
};

import teamLogo from '../static/mock_team.svg';

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

export interface IItem {
  label: string,
  data: string,
}

export const itemsDescription: IItem[] = [
  { label: 'Year of foundation', data: `${Team.foundationYear}` },
  { label: 'Conference', data: `${Team.conference}` },
  { label: 'Division', data: `${Team.division}` },
];

import playerImage from '../../static/storybook_mock_images/mock_player.svg';

export interface IPlayer {
  name: string,
  number: number,
  position: string,
  team: string,
  birthday: string,
  height: number,
  weight: number,
  avatarUrl: string,
  id: number,
}

export const Player: IPlayer = {
  name: 'Greg Whittington',
  number: 22,
  position: 'Forward',
  team: 'Memphis Grizzlies',
  birthday: '2000-01-23T14:32:24.076Z',
  height: 206,
  weight: 95,
  avatarUrl: `${playerImage}`,
  id: 1,
};

import playerImage from '../static/mock_player.svg';

interface IPlayer {
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
  team: 'Denver Nuggets',
  birthday: '2000-01-23T14:32:24.076Z',
  height: 206,
  weight: 95,
  avatarUrl: `${playerImage}`,
  id: 1,
};
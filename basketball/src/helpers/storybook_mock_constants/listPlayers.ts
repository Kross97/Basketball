import player1 from '../../static/storybook_mock_images/mock_image_upload.svg';
import player2 from '../../static/storybook_mock_images/mock_player_1.svg';
import player3 from '../../static/storybook_mock_images/mock_player_2.svg';
import player4 from '../../static/storybook_mock_images/mock_player_3.svg';
import player5 from '../../static/storybook_mock_images/mock_player_4.svg';
import player6 from '../../static/storybook_mock_images/mock_player_5.svg';

import { Player } from './Player';

export const listPlayers: Player[] = [{
  name: 'Jaylen Adams',
  team: 1,
  number: 10,
  position: 'CenterForward',
  birthday: '2001-11-26T09:37:07.967Z',
  height: 198,
  weight: 97,
  avatarUrl: `${player1}`,
  id: 1,
},
{
  name: 'Troy Daniels',
  number: 11,
  team: 1,
  position: 'GuardForward',
  birthday: '1997-08-26T09:37:07.967Z',
  height: 218,
  weight: 100,
  avatarUrl: `${player2}`,
  id: 2,
},
{
  name: 'Danilo Gallinari',
  number: 12,
  team: 1,
  position: 'Forward',
  birthday: '2000-01-26T09:37:07.967Z',
  height: 187,
  weight: 95,
  avatarUrl: `${player3}`,
  id: 3,
},
{
  name: 'Al Horford',
  number: 13,
  team: 1,
  position: 'Center',
  birthday: '2003-06-26T09:37:07.967Z',
  height: 218,
  weight: 100,
  avatarUrl: `${player4}`,
  id: 4,
},
{
  name: 'Malik Beasley',
  number: 14,
  team: 1,
  position: 'Guard',
  birthday: '1995-04-26T09:37:07.967Z',
  height: 218,
  weight: 92,
  avatarUrl: `${player5}`,
  id: 5,
}, {
  name: 'Kyle Anderson',
  number: 15,
  team: 1,
  position: 'Forward',
  birthday: '2004-02-26T09:37:07.967Z',
  height: 218,
  weight: 90,
  avatarUrl: `${player6}`,
  id: 6,
}, {
  name: 'Greg Whittington',
  number: 16,
  team: 1,
  position: 'GuardForward',
  birthday: '1996-12-26T09:37:07.967Z',
  height: 218,
  weight: 96,
  avatarUrl: `${player1}`,
  id: 7,
}];

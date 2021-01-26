import React, { FC } from 'react';
import styled from 'styled-components';
import { getFullAge } from '../../helpers/functions/getFullAge';
import { TextLarge, TextStandart } from '../../uiComponents/Typography';
import { sizeMobile } from '../../helpers/constants/mobileSize';
import { IPlayer } from '../../helpers/Mock_player';

interface IProps {
  player: IPlayer,
}

export const PlayerItemsDescription: FC<IProps> = ({ player }) => (
  <>
    <div>
      <LabelItem>Position</LabelItem>
      <DataItem>{player.position}</DataItem>
    </div>
    <div>
      <LabelItem>Team</LabelItem>
      <DataItem>{player.team}</DataItem>
    </div>
    <div>
      <LabelItem>Height</LabelItem>
      <DataItem>{`${player.height} cm`}</DataItem>
    </div>
    <div>
      <LabelItem>Weight</LabelItem>
      <DataItem>{`${player.weight} kg`}</DataItem>
    </div>
    <div>
      <LabelItem>Age</LabelItem>
      <DataItem>{`${getFullAge(player.birthday)}`}</DataItem>
    </div>
  </>
);

const LabelItem = styled(TextLarge)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
  font-weight: 700;
  
  @media(max-width: ${sizeMobile}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const DataItem = styled(TextStandart)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${sizeMobile}) {
    font-size: 14px;
  }
`;

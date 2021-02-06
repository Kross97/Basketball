import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getFullAge } from '../../../helpers/functions/getFullAge';
import { TextLarge, TextStandart } from '../../../uiComponents/Typography';
import { sizeMobile } from '../../../helpers/constants/mobileSize';
import { IPlayer } from '../../../helpers/interfaces/storeInterfaces/Player';
import { parsePositionPlayer } from '../../../helpers/functions/parsePositionPlayer';

interface IProps {
  player: IPlayer,
  teamName: string,
}

export const PlayerItemsDescription: FC<IProps> = ({ player, teamName }) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <LabelItem>{t('player:position')}</LabelItem>
        <DataItem>{parsePositionPlayer(player.position)}</DataItem>
      </div>
      <div>
        <LabelItem>{t('player:team')}</LabelItem>
        <DataItem>{teamName}</DataItem>
      </div>
      <div>
        <LabelItem>{t('player:height')}</LabelItem>
        <DataItem>{`${player.height} cm`}</DataItem>
      </div>
      <div>
        <LabelItem>{t('player:weight')}</LabelItem>
        <DataItem>{`${player.weight} kg`}</DataItem>
      </div>
      <div>
        <LabelItem>{t('player:age')}</LabelItem>
        <DataItem>{`${getFullAge(player.birthday)}`}</DataItem>
      </div>
    </>
  );
};

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
  word-break: break-word;
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${sizeMobile}) {
    font-size: 14px;
  }
`;

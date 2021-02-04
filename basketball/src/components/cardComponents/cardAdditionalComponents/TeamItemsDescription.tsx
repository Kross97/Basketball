import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TextLarge, TextStandart } from '../../../uiComponents/Typography';
import { sizeMobile } from '../../../helpers/constants/mobileSize';
import { ITeam } from '../../../helpers/interfaces/storeInterfaces/Team';

interface IProps {
  team: ITeam,
}

export const TeamItemsDescription: FC<IProps> = ({
  team,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <LabelItem>{t('team:foundationYear')}</LabelItem>
        <DataItem>{team.foundationYear}</DataItem>
      </div>
      <div>
        <LabelItem>{t('team:conference')}</LabelItem>
        <DataItem>{team.conference}</DataItem>
      </div>
      <div>
        <LabelItem>{t('team:division')}</LabelItem>
        <DataItem>{team.division}</DataItem>
      </div>
    </>
  );
};

const LabelItem = styled(TextLarge)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
  
  @media(max-width: ${sizeMobile}) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
  }
`;

const DataItem = styled(TextStandart)`
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${sizeMobile}) {
    font-size: 14px;
  }
`;

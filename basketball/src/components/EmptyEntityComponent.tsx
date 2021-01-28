import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { TextLabel, TextLarge } from '../uiComponents/Typography';
import { ButtonAction } from '../uiComponents/ButtonAction';
import teamsEmpty from '../static/images/empty_teams.svg';
import playersEmpty from '../static/images/empty_players.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

interface IProps {
  isTeam: boolean;
}

export const EmptyEntity: FC<IProps> = ({
  isTeam,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <ContainerEntity>
      <ImageEmpty isTeam={isTeam} />
      <LabelEmpty>{t('emptyEntity:label')}</LabelEmpty>
      <TextEntity>{isTeam ? t('emptyEntity:emptyTeam') : t('emptyEntity:emptyPlayer')}</TextEntity>
      <ButtonAction
        onClick={() => history.push(isTeam ? 'teams/addTeam' : 'players/addPlayer')}
        isNegativeStyle={false}
        isAdding
        size="large"
        text="Add"
        disabled={false}
        type="button"
      />
    </ContainerEntity>
  );
};

const ContainerEntity = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 79px 90px 48px;
  align-items: center;
  
  @media(max-width: ${mobileVersionLayout}) {
    border-radius: 0;
    flex-grow: 1;
    padding: 79px 55px 48px;
  }
`;

const LabelEmpty = styled(TextLabel)`
  color: ${({ theme }) => theme.colors.lightestRed};
  font-weight: 800;
  margin-top: 77px;

  @media (max-width: ${mobileVersionLayout}) {
    font-size: 24px;
  }
`;

const ImageEmpty = styled.div<{ isTeam: boolean }>`
  width: ${({ isTeam }) => (isTeam ? '381px' : '320px')};
  height: ${({ isTeam }) => (isTeam ? '260px' : '320px')};
  background: ${({ isTeam }) => (isTeam ? `url(${teamsEmpty}) no-repeat` : `url(${playersEmpty}) no-repeat`)};
  background-size: contain;
  
  @media (max-width: ${mobileVersionLayout}) {
    width: ${({ isTeam }) => (isTeam ? '339px' : '225px')};
    height: 226px;
  }
`;

const TextEntity = styled(TextLarge)`
  color: ${({ theme }) => theme.colors.middleGrey};
  font-weight: normal;
  margin: 24px 0 48px 0;

  @media (max-width: ${mobileVersionLayout}) {
    font-size: 18px;
  }
`;

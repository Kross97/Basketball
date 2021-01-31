import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import React from 'react';
import { routePaths } from '../helpers/constants/routePaths';
import { TextLink } from '../uiComponents/TextLink';
import { TeamItemsDescription } from '../components/cardComponents/cardAdditionalComponents/TeamItemsDescription';
import { EnumerationPlayersTeam } from '../uiComponents/EnumerationPlayersTeam';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import createIcon from '../static/icons/create.svg';
import { ReactComponent as DeleteIcon } from '../static/icons/delete.svg';
import { TextExtraLarge } from '../uiComponents/Typography';
import { Team } from '../helpers/storybook_mock_constants/Mock_team';
import { listPlayers } from '../helpers/storybook_mock_constants/listPlayers';

export const TeamsCard = () => {
  const { t } = useTranslation();

  return (
    <ContainerCard>
      <CardNavigation>
        <Links>
          <TextLink text={t('main')} to={routePaths.mainBase} disabled={false} />
          <Separator>/</Separator>
          <TextLink text={t('team:teams')} to={routePaths.teams} disabled={false} />
          <Separator>/</Separator>
          <TextLink text={`${Team.name}`} to={`${Team.name}`} disabled />
        </Links>
        <Actions>
          <BtnUpdate type="button" />
          <BtnDelete type="button">
            <RemoveIcon />
          </BtnDelete>
        </Actions>
      </CardNavigation>
      <CardBody>
        <Content>
          <LogoTeam imageUrl={Team.imageUrl} />
          <DataCard>
            <TeamName>{Team.name}</TeamName>
            <DescriptionContainer>
              <TeamItemsDescription
                team={Team}
              />
            </DescriptionContainer>
          </DataCard>
        </Content>

      </CardBody>
      <EnumerationPlayersTeam players={listPlayers} />
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
  margin: 32px auto;
  flex-grow: 0.2;
  position: relative;
  
  @media(max-width: ${mobileVersionLayout}) {
    margin: 16px 0;
    flex-grow: 1;
  }
`;

const CardNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 26px 35px 21px;
  border-radius: 10px 10px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};  
  
  @media(max-width: ${mobileVersionLayout}) {
    padding: 15px 16px;
    border-radius: 0;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  padding: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
`;

const BtnUpdate = styled(Button)`
  background: url(${createIcon}) no-repeat 4px 3px;
  background-size: 17px;
  margin-right: 22px;
`;

const RemoveIcon = styled(DeleteIcon)`
  width: 14px;
  height: 18px;
`;

const BtnDelete = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};

  & svg {
    fill: ${({ theme }) => theme.colors.red};
  }
`;

const Actions = styled.div`
  display: flex;
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 4px;
`;

const Links = styled.div``;

const CardBody = styled.div`
  padding: 65px 0 65px 146px;
  background: ${({ theme }) => theme.gradient.base};
  border-radius: 0 0 10px 10px;
  position: relative;
  
  @media(max-width: ${mobileVersionLayout}) {
    padding: 48px 15px 43px;
    background: ${({ theme }) => theme.gradient.mobile};
    border-radius: 0;
  }
`;

const DataCard = styled.div`
  @media(max-width: ${mobileVersionLayout}) {
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  @media(max-width: ${mobileVersionLayout}) {
    flex-direction: column;
  }
`;

const LogoTeam = styled.div<{ imageUrl: string}>`
  margin-right: 146px;
  flex-shrink: 0.1;
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center`};
  background-size: contain;
  width: 210px;
  height: 210px;
  
  @media(max-width: ${mobileVersionLayout}) {
    width: 140px;
    height: 140px;
    margin-right: 0;
    margin-bottom: 48px;
  }
`;

const TeamName = styled(TextExtraLarge)`
  display: block;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${mobileVersionLayout}) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 32px;
    font-weight: 700;
  }
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 54px;
  grid-column-gap: 80px;
  
  @media(max-width: ${mobileVersionLayout}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 43px;
  }
`;

import styled from 'styled-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { routePaths } from '../helpers/constants/routePaths';
import { TextLink } from '../uiComponents/TextLink';
import { PlayerItemsDescription } from '../components/cardComponents/cardAdditionalComponents/PlayerItemsDescriptions';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import createIcon from '../static/icons/create.svg';
import { ReactComponent as DeleteIcon } from '../static/icons/delete.svg';
import { TextExtraLarge } from '../uiComponents/Typography';
import { Player } from '../helpers/storybookMockConstants/Mock_player';

export const PlayerCard = () => {
  const { t } = useTranslation();
  return (
    <CardContainer>
      <CardNavigation>
        <div>
          <TextLink text={t('main')} to="" disabled={false} />
          <Separator>/</Separator>
          <TextLink text={t('player:players')} to={routePaths.players} disabled={false} />
          <Separator>/</Separator>
          <TextLink text={`${Player.name}`} to={`${Player.name}`} disabled />
        </div>
        <Actions>
          <BtnUpdate type="button" />
          <BtnDelete type="button">
            <RemoveIcon />
          </BtnDelete>
        </Actions>
      </CardNavigation>
      <CardBody>
        <Content>
          <ImagePlayer
            avatarUrl={Player.avatarUrl}
          />
          <DataCard>
            <PlayerName>
              {Player.name}
              <PlayerNumber>{`#${Player.number}`}</PlayerNumber>
            </PlayerName>
            <DescriptionContainer>
              <PlayerItemsDescription
                teamName="Memphis Grizzlies"
                player={Player}
              />
            </DescriptionContainer>
          </DataCard>
        </Content>
      </CardBody>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: 32px auto;
  flex-grow: 0.2;

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
  @media (max-width: 445px) {
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

const CardBody = styled.div`
  padding: 65px 0 0 50px;
  position: relative;
  background: ${({ theme }) => theme.gradient.base};
  border-radius: 0 0 10px 10px;

  @media (max-width: ${mobileVersionLayout}) {
    padding: 48px 15px 43px;
    background: ${({ theme }) => theme.gradient.mobile};
    border-radius: 0;
  }
`;

const DataCard = styled.div`
  align-self: self-start;
  margin-bottom: 65px;

  @media (max-width: ${mobileVersionLayout}) {
    text-align: center;
    align-self: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${mobileVersionLayout}) {
    flex-direction: column;
  }
`;

const ImagePlayer = styled.div<{ avatarUrl: string }>`
  margin-right: 56px;
  flex-shrink: 0.1;
  background: ${({ avatarUrl }) => `url(${avatarUrl}) no-repeat`};
  width: 500px;
  height: 368px;
  background-position: center;
  background-size: contain;
  align-self: flex-end;

  @media (max-width: ${mobileVersionLayout}) {
    width: 185px;
    height: 144px;
    margin-right: 0;
    margin-bottom: 48px;
    align-self: center;
  }
`;

const PlayerName = styled(TextExtraLarge)`
  display: block;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  @media (max-width: ${mobileVersionLayout}) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 32px;
  }
`;

const PlayerNumber = styled(PlayerName)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.lightRed};
  margin-bottom: 0;
  margin-left: 10px;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 180px;
  grid-row-gap: 54px;

  @media (max-width: ${mobileVersionLayout}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 43px ;
  }
`;

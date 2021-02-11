import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import createIcon from '../../static/icons/create.svg';
import { ReactComponent as DeleteIcon } from '../../static/icons/delete.svg';
import { TextLink } from '../../uiComponents/TextLink';
import { TextExtraLarge } from '../../uiComponents/Typography';
import {
  mobileLayout, mobliSizeCard, sizeMobile, mobileDataCard,
} from '../../helpers/constants/mobileSize';
import { PlayerItemsDescription } from './cardAdditionalComponents/PlayerItemsDescriptions';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
import { removeSelectedPlayer } from '../../store/asyncActions/player';
import imageUnknow from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { NotificationMessage } from '../../uiComponents/NotificationMessage';
import { routePaths } from '../../helpers/constants/routePaths';

const actionCreators = {
  removeSelectedPlayer,
};

export default () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { t } = useTranslation();
  const { removeSelectedPlayer: removePlayer } = useCustomActions(actionCreators);

  const { player, token, errorMessage } = useSelector(({
    playersDataReducer: { entities },
    authDataUser,
    addEntityError,
  }: StoreReducer) => ({
    errorMessage: addEntityError.errorMessage,
    player: entities[id]!,
    token: authDataUser.authData.token,
  }), shallowEqual);

  const teamName = useSelector(({ teamsDataReducer: { entities } }: StoreReducer) => (player ? entities[player.team]?.name : ''));

  const playerUpdate = () => {
    history.replace(`${routePaths.playerAdd}/${player?.id}`);
  };

  const removeCurrentPlayer = () => {
    removePlayer({
      id: player.id,
      srcImage: player.avatarUrl,
      token,
      history,
    });
  };

  return (
    player
      ? (
        <CardContainer>
          <CardNavigation>
            <div>
              <TextLink text={t('main')} to={routePaths.mainBase} disabled={false} />
              <Separator>/</Separator>
              <TextLink text={t('player:players')} to={routePaths.players} disabled={false} />
              <Separator>/</Separator>
              <TextLink text={`${player.name}`} to={`${player.name}`} disabled />
            </div>
            <Actions>
              <BtnUpdate onClick={playerUpdate} type="button" />
              <BtnDelete onClick={removeCurrentPlayer} type="button">
                <RemoveIcon />
              </BtnDelete>
            </Actions>
          </CardNavigation>
          <CardBody>
            <Content>
              <ImagePlayer
                avatarUrl={regExpImageTeam.test(player.avatarUrl) ? player.avatarUrl : imageUnknow}
              />
              <DataCard>
                <PlayerName>
                  {player.name}
                  <PlayerNumber>{`#${player.number}`}</PlayerNumber>
                </PlayerName>
                <DescriptionContainer>
                  <PlayerItemsDescription
                    teamName={teamName || ''}
                    player={player}
                  />
                </DescriptionContainer>
              </DataCard>
            </Content>
            {errorMessage !== ''
                        && (
                        <NotificationContainer>
                          <NotificationMessage text={errorMessage} />
                        </NotificationContainer>
                        )}
          </CardBody>
        </CardContainer>
      ) : <></>
  );
};

const CardContainer = styled.div`
  margin: 32px auto;
  flex-grow: 0.2;

  @media (max-width: 1450px) {
    margin: 32px;
  }

  @media (max-width: ${mobileLayout}) {
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

  @media (max-width: 1250px) {
    padding-left: 0;
  }

  @media (max-width: ${mobileLayout}) {
    padding: 48px 15px 43px;
    background: ${({ theme }) => theme.gradient.mobile};
    border-radius: 0;
  }
`;

const DataCard = styled.div`
  align-self: self-start;
  margin-bottom: 65px;
  padding: 0 20px;
  
  @media(max-width: 1080px) {
    padding: 0 15px;
  }
  
  @media(max-width: ${sizeMobile}) {
    padding: 0 5px 0 0;
  }
  
  @media (max-width: ${mobileLayout}) {
    text-align: center;
    align-self: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${mobileLayout}) {
    flex-direction: column;
  }
`;

const ImagePlayer = styled.div<{ avatarUrl: string }>`
  margin-right: 56px;
  flex-shrink: 0.1;
  background: ${({ avatarUrl }) => `url(${avatarUrl}) no-repeat center 5px`};
  width: 500px;
  height: 368px;
  background-size: contain;
  align-self: flex-end;

  @media (max-width: 1250px) {
    margin-right: 0;
  }

  @media (max-width: 1030px) {
    width: 350px;
    height: 250px;
  }
  
  @media(max-width: ${mobliSizeCard}) {
    width: 320px;
    background-position-y: 9px;
  }
  
  @media (max-width: ${mobileLayout}) {
    width: 185px;
    height: 144px;
    margin-right: 0;
    margin-bottom: 48px;
    align-self: center;
    background-position-y: 0;
  }
`;

const PlayerName = styled(TextExtraLarge)`
  display: block;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  
  @media(max-width: 1080px) {
    font-size: 32px;
  }
  
  @media (max-width: ${sizeMobile}) {
    font-size: 23px;
  }

  @media (max-width: ${mobileLayout}) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 32px;
  }
  @media(max-width: ${mobileDataCard}) {
    font-size: 17px;
    line-height: 25px;
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
  grid-template-columns: 165px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 54px;
  grid-column-gap: 180px;

  @media (max-width: 1350px) {
    grid-column-gap: 90px;
  }

  @media (max-width: 1080px) {
    grid-column-gap: 50px;
  }

  @media (max-width: ${sizeMobile}) {
    grid-column-gap: 0;
  }

  @media (max-width: ${mobileLayout}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${mobliSizeCard}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 43px ;
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 36px;
  width: 470px;
  display: flex;
  justify-content: center;

  @media (max-width: ${mobliSizeCard}) {
    width: auto;
    top: 60px;
    right: 20%;
    left: 20%;
  }
`;

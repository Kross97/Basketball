import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';
import createIcon from '../../static/icons/create.svg';
import { ReactComponent as DeleteIcon } from '../../static/icons/delete.svg';
import { TextLink } from '../../uiComponents/TextLink';
import { TextExtraLarge } from '../../uiComponents/Typography';
import {
  mobileVersionLayout, mobliSizeCard, sizeMobile, mobileDataCard,
} from '../../helpers/constants/mobileSize';
import { TeamItemsDescription } from './cardAdditionalComponents/TeamItemsDescription';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
import imageUnknown from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';
import { removeTeam } from '../../store/asyncActions/team';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { EnumerationPlayersTeam } from '../../uiComponents/EnumerationPlayersTeam';
import { playersCurrentTeam } from '../../store/selectors/playersSelector';
import { IPlayer } from '../../helpers/interfaces/storeInterfaces/Player';
import { NotificationMessage } from '../../uiComponents/NotificationMessage';
import { routePaths } from '../../helpers/constants/routePaths';

const actionCreators = {
  removeTeam,
};

export default () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const {
    removeTeam: deleteTeam,
  } = useCustomActions(actionCreators);

  const { team, token, errorMessage } = useSelector((
    {
      teamsDataReducer,
      authDataUser,
      addEntityError,
    }: StoreReducer,
  ) => ({
    team: teamsDataReducer.entities[id]!,
    token: authDataUser.authData.token,
    errorMessage: addEntityError.errorMessage,
  }), shallowEqual);
  const playersList = useSelector((state: StoreReducer) => playersCurrentTeam(state, id));

  const { t } = useTranslation();

  const teamUpdate = () => {
    history.replace(`${routePaths.teamAdd}/${team.id}`);
  };

  const deleteCurrentTeam = () => {
    deleteTeam({
      id, history, playersList, token,
    });
  };

  return (
    team
      ? (
        <ContainerCard>
          <CardNavigation>
            <Links>
              <TextLink text={t('main')} to={routePaths.mainBase} disabled={false} />
              <Separator>/</Separator>
              <TextLink text={t('team:teams')} to={routePaths.teams} disabled={false} />
              <Separator>/</Separator>
              <TextLink text={`${team.name}`} to={`${team.name}`} disabled />
            </Links>
            <Actions>
              <BtnUpdate onClick={teamUpdate} type="button" />
              <BtnDelete onClick={deleteCurrentTeam} type="button">
                <RemoveIcon />
              </BtnDelete>
            </Actions>
          </CardNavigation>
          <CardBody>
            <Content>
              <LogoTeam
                imageUrl={regExpImageTeam.test(team.imageUrl)
                  ? team.imageUrl
                  : imageUnknown}
              />
              <DataCard>
                <TeamName>{team.name}</TeamName>
                <DescriptionContainer>
                  <TeamItemsDescription
                    team={team}
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
          {playersList.length > 0 && (
          <EnumerationPlayersTeam players={playersList as IPlayer[]} />
          )}
        </ContainerCard>
      ) : <></>
  );
};

const ContainerCard = styled.div`
  margin: 32px auto;
  flex-grow: 0.2;
  position: relative;

  @media (max-width: 1150px) {
    margin: 32px;
  }

  @media (max-width: ${mobliSizeCard}) {
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

  @media (max-width: ${mobliSizeCard}) {
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

  @media (max-width: ${mobileVersionLayout}) {
    padding-left: 85px;
  }

  @media (max-width: ${mobliSizeCard}) {
    padding: 48px 15px 43px;
    background: ${({ theme }) => theme.gradient.mobile};
    border-radius: 0;
  }
`;

const DataCard = styled.div`
  @media (max-width: ${mobliSizeCard}) {
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${mobliSizeCard}) {
    flex-direction: column;
  }
`;

const LogoTeam = styled.div<{ imageUrl: string }>`
  margin-right: 146px;
  flex-shrink: 0.1;
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center`};
  background-size: contain;
  width: 210px;
  height: 210px;

  @media (max-width: 1150px) {
    margin-right: 105px;
  }

  @media (max-width: ${mobileVersionLayout}) {
    width: 165px;
    height: 165px;
    margin-right: 60px;
  }


  @media (max-width: ${mobliSizeCard}) {
    width: 140px;
    height: 140px;
    margin-right: 0;
    margin-bottom: 48px;
  }
  @media (max-width: ${mobileDataCard}) {
    width: 89px;
    height: 90px;
  }
`;

const TeamName = styled(TextExtraLarge)`
  display: block;
  word-break: break-word;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${sizeMobile}) {
    font-size: 28px;
  }

  @media (max-width: ${mobliSizeCard}) {
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 32px;
  }
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 54px;
  grid-column-gap: 80px;

  @media (max-width: 1150px) {
    grid-column-gap: 50px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${mobileVersionLayout}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${mobliSizeCard}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 43px;
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

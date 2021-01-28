import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import createIcon from '../../static/icons/create.svg';
import { ReactComponent as DeleteIcon } from '../../static/icons/delete.svg';
import { TextLink } from '../../uiComponents/TextLink';
// import { team } from '../../helpers/Mock_team';
import { TextExtraLarge } from '../../uiComponents/Typography';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { TeamItemsDescription } from './cardAdditionalComponents/TeamItemsDescription';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import imageUnknow from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';
import { removeTeam } from '../../store/async_actions/team';
import { useCustomActions } from '../../helpers/functions/useCustomActions';

const actionCreators = {
  removeTeam,
};

export const TeamsCard = () => {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();
  const { team, token } = useSelector(({ teamsDataReducer, authDataUser }: IStoreReducer) => ({
    team: teamsDataReducer.entities[id],
    token: authDataUser.authData.token,
  }));

  const { removeTeam: deleteTeam } = useCustomActions(actionCreators);
  if (!team) {
    return <></>;
  }

  const teamUpdate = () => {
    history.replace(`/main/teams/addTeam/${team.id}`);
  };

  const deleteCurrentTeam = () => {
    deleteTeam({ id, token });
    history.replace('/main/teams');
  };
  return (
    <ContainerCard>
      <CardNavigation>
        <Links>
          <TextLink text="Main" to="/main" disabled={false} />
          <Separator>/</Separator>
          <TextLink text="Teams" to="/main/teams" disabled={false} />
          <Separator>/</Separator>
          <TextLink text={`${team.name}`} to={`${team.name}`} disabled />
        </Links>
        <Actions>
          <BtnCreate onClick={teamUpdate} type="button" />
          <BtnDelete onClick={deleteCurrentTeam} type="button">
            <RemoveIcon />
          </BtnDelete>
        </Actions>
      </CardNavigation>
      <CardBody>
        <Content>
          <LogoTeam imageUrl={regExpImageTeam.test(team.imageUrl) ? team.imageUrl : imageUnknow} />
          <DataCard>
            <TeamName>{team.name}</TeamName>
            <DescriptionContainer>
              <TeamItemsDescription
                team={team}
              />
            </DescriptionContainer>
          </DataCard>
        </Content>
      </CardBody>
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
  margin: 32px auto;

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

const BtnCreate = styled(Button)`
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
  gap: 54px 80px;
  
  @media(max-width: ${mobileVersionLayout}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 43px;
  }
`;

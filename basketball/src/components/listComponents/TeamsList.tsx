import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { teamsSelector } from '../../store/selectors/teamsSelector';
import { ListBase } from './ListBase';
import { EmptyEntity } from '../EmptyEntityComponent';
import { FieldSearch } from '../../uiComponents/FieldSearch';
import { ButtonAction } from '../../uiComponents/ButtonAction';

export const TeamsList = () => {
  const teams = useSelector(teamsSelector);
  const history = useHistory();
  return (
    <ContainerTeams>
      <HeaderTeams>
        <FieldSearch />
        <ButtonAction
          isNegativeStyle={false}
          isAdding
          size="small"
          text="Add"
          disabled={false}
          type="button"
          onClick={() => history.push('/main/teams/addTeam')}
        />
      </HeaderTeams>
      <TeamsBody>
        { teams.length > 0 ? <ListBase type="team" entities={teams} /> : <EmptyEntity isTeam /> }
      </TeamsBody>
      <TeamsFooter>
        <ReactPaginate pageCount={10} pageRangeDisplayed={4} marginPagesDisplayed={10} />
      </TeamsFooter>
    </ContainerTeams>
  );
};

const ContainerTeams = styled.div`
  margin: 32px auto 0;
`;

const HeaderTeams = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 32px; 
  
  & > div:nth-child(1) {
    flex-grow: 0.18;
  }
`;

const TeamsBody = styled.div`
`;

const TeamsFooter = styled.div``;

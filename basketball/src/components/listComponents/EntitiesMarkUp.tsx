import React, { useEffect, useState, FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import { teamsChunkSelector, teamsForSelectPlayer, allTeamsSelector } from '../../store/selectors/teamsSelector';
import { playersChunkSelector, allPlayersSelector } from '../../store/selectors/playersSelector';
import { ListBase } from './ListBase';
import { EmptyEntity } from '../EmptyEntityComponent';
import { FieldSearch } from '../../uiComponents/FieldSearch';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { PaginationCountBtn } from '../../uiComponents/PaginationCountBtn';
import { SelectCounts } from '../../uiComponents/SelectCounts';
import { loadChunkTeams } from '../../store/async_actions/team';
import { loadChunkPlayers } from '../../store/async_actions/player';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import {
  IStateChangeEntities, IOption, IPaginationValue, IDataSelected, ISelectedDataAll,
} from '../../helpers/interfaces/components_interfaces/StateAndEvents';
import style from '../../themes/reactPagination.module.scss';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { MultiSelectEntities } from '../../uiComponents/MultiSelectEntities';
import { SearchNotFound } from './SearchNotFound';
import { routePaths } from '../../helpers/constants/routePaths';

const actionCreator = {
  loadChunkTeams,
  loadChunkPlayers,
};

interface IProps {
  isTeam: boolean,
}

export const EntitiesMarkUp: FC<IProps> = ({
  isTeam,
}) => {
  const { t } = useTranslation();
  const selectedChunk = useSelector<IStoreReducer>(
    isTeam
      ? teamsChunkSelector
      : playersChunkSelector,
  );
  const selectedAll = useSelector<IStoreReducer>(
    isTeam
      ? allTeamsSelector
      : allPlayersSelector,
  );
  const typedSelectedChunk = selectedChunk as IDataSelected;
  const typedSelectedAll = selectedAll as ISelectedDataAll;
  const teamsOptions = useSelector(teamsForSelectPlayer);

  const token = useSelector(({ authDataUser: { authData } }: IStoreReducer) => authData.token);
  const history = useHistory();
  const {
    loadChunkTeams: loadNewChunkTeams,
    loadChunkPlayers: loadNewChunkPlayers,
  } = useCustomActions(actionCreator);

  const loadNewChunk = isTeam ? loadNewChunkTeams : loadNewChunkPlayers;

  const [chunkData, setChunkData] = useState<IStateChangeEntities>({
    name: '',
    teams: [],
    page: 1,
    size: '6',
  });

  useEffect(() => {
    loadNewChunk({ chunkData, token });
  }, []);

  const changeNameEntity = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newNameChunk = { ...chunkData, name: target.value };
    setChunkData(newNameChunk);
    loadNewChunk({ chunkData: newNameChunk, token });
  };

  const changeSize = (option: IOption) => {
    const newSizeChunk = { ...chunkData, page: 1, size: option.value };
    setChunkData(newSizeChunk);
    loadNewChunk({ chunkData: newSizeChunk, token });
  };

  const changePage = (page: IPaginationValue) => {
    const newPageChunk = { ...chunkData, page: page.selected + 1 };
    setChunkData(newPageChunk);
    loadNewChunk({ chunkData: newPageChunk, token });
  };

  const addCommandSearch = (options: IOption[]) => {
    let newCommandsChunk;
    if (options) {
      newCommandsChunk = { ...chunkData, teams: [...options] };
    } else {
      newCommandsChunk = { ...chunkData, teams: [] };
    }
    setChunkData(newCommandsChunk);
    loadNewChunk({ chunkData: newCommandsChunk, token });
  };

  return (
    typedSelectedAll.length > 0 ? (

      <ContainerTeams>
        <HeaderTeams>
          <FieldSearch onChange={changeNameEntity} />
          {!isTeam && (
            <MultiSelectEntities
              options={teamsOptions}
              isMulti
              isPlaceholder={t('markup:select')}
              isForm={false}
              onChange={addCommandSearch}
            />
          )}
          <ButtonAction
            isNegativeStyle={false}
            isAdding
            size="small"
            text={t('markup:add')}
            disabled={false}
            type="button"
            onClick={() => history.push(isTeam ? routePaths.teamAdd : routePaths.playerAdd)}
          />
        </HeaderTeams>
        <TeamsBody>
          {typedSelectedChunk.chunkEntities.length > 0
            ? <ListBase type={isTeam ? 'team' : 'player'} entities={typedSelectedChunk.chunkEntities} />
            : <SearchNotFound />}
        </TeamsBody>
        <TeamsFooter>
          <ReactPaginate
            previousLabel={<PaginationCountBtn type="prev" />}
            nextLabel={<PaginationCountBtn type="next" />}
            breakLabel={<PaginationCountBtn type="break" />}
            pageClassName={style.itemPagination}
            containerClassName={style.paginationContainer}
            activeClassName={style.activeClassName}
            onPageChange={changePage}
            initialPage={chunkData.page - 1}
            pageCount={typedSelectedChunk.countEntities / typedSelectedChunk.sizePageEntities}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
          />

          <SelectCounts onChange={changeSize} />
        </TeamsFooter>
      </ContainerTeams>
    )
      : <EmptyEntity isTeam={isTeam} />
  );
};

const ContainerTeams = styled.div`
  margin: 32px auto 0;
  display: flex;
  flex-direction: column;
`;

const HeaderTeams = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 32px;
  
  & > div:nth-child(1), & > label:nth-of-type(1) {
    flex-basis: 32%;
  } 
  
  @media(max-width: ${mobileVersionLayout}) {
    flex-direction: column;
    align-self: stretch;
    & > div:nth-child(1) {
      margin-bottom: 16px;
    }
    & > div:nth-child(1) input {
      padding: 4px 12px;
    }
    & > button {
      padding: 3.5px 0;
      margin-top: 16px;
    }
  }
`;

const TeamsBody = styled.div`
`;

const TeamsFooter = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
`;

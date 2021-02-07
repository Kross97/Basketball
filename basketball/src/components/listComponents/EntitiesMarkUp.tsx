import React, {
  useEffect, useState, FC, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import { teamsChunkSelector, teamsForSelectPlayer, allTeamsSelector } from '../../store/selectors/teamsSelector';
import { playersChunkSelector, allPlayersSelector } from '../../store/selectors/playersSelector';
import { ListBase } from './ListBase';
import { EmptyEntity } from '../EmptyEntityComponent';
import { FieldSearch } from '../../uiComponents/FieldSearch';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { PaginationCountBtn } from '../../uiComponents/PaginationCountBtn';
import { SelectCounts } from '../../uiComponents/SelectCounts';
import { loadChunkTeams } from '../../store/asyncActions/team';
import { loadChunkPlayers } from '../../store/asyncActions/player';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
import {
  IStateChangeEntities, IOption, IPaginationValue, IDataSelected, ISelectedDataAll,
} from '../../helpers/interfaces/componentsInterfaces/StateAndEvents';
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

export const EntitiesMarkUp: FC<IProps> = React.memo(({
  isTeam,
}) => {
  const { t } = useTranslation();
  const selectedChunk = useSelector<StoreReducer>(
    isTeam
      ? teamsChunkSelector
      : playersChunkSelector,
  );
  const selectedAll = useSelector<StoreReducer>(
    isTeam
      ? allTeamsSelector
      : allPlayersSelector,
  );
  const typedSelectedChunk = selectedChunk as IDataSelected;
  const typedSelectedAll = selectedAll as ISelectedDataAll;
  const teamsOptions = useSelector(teamsForSelectPlayer);

  const token = useSelector(({ authDataUser: { authData } }: StoreReducer) => authData.token);
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
    if (chunkData.size !== option.value) {
      const newSizeChunk = { ...chunkData, page: 1, size: option.value };
      setChunkData(newSizeChunk);
      loadNewChunk({ chunkData: newSizeChunk, token });
    }
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

  const showAddNewEntityForm = useCallback(() => {
    history.push(isTeam ? routePaths.teamAdd : routePaths.playerAdd);
  }, []);

  return (
    typedSelectedAll.length > 0 ? (

      <ContainerTeams>
        <HeaderTeams>
          <FieldSearch onChange={debounce(changeNameEntity, 300)} />
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
            onClick={showAddNewEntityForm}
          />
        </HeaderTeams>
        <TeamsBody>
          {typedSelectedChunk.chunkEntities.length > 0
            ? <ListBase type={isTeam ? 'team' : 'player'} entities={typedSelectedChunk.chunkEntities} />
            : <SearchNotFound />}
        </TeamsBody>
        <TeamsFooter>
          {typedSelectedChunk.chunkEntities.length > 0 && (
          <>
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
          </>
          )}
        </TeamsFooter>
      </ContainerTeams>
    )
      : <EmptyEntity isTeam={isTeam} />
  );
});

const ContainerTeams = styled.div`
  margin: 32px auto 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${mobileVersionLayout}) {
    margin: 32px 0 0;
  }
  @media (max-width: 325px) {
    flex-grow: 1;
  }
`;

const HeaderTeams = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  & > div:nth-child(1), & > label:nth-of-type(1) {
    flex-basis: 32%;
  }

  @media (max-width: ${mobileVersionLayout}) {
    flex-direction: column;
    align-self: stretch;
    & > div:nth-child(1) {
      margin-bottom: 16px;
    }

    & > button {
      margin-top: 16px;
    }
  }
`;

const TeamsBody = styled.div`
  align-self: center;
`;

const TeamsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

import React, { FC } from 'react';
import styled from 'styled-components';
import { CardItemConstructor } from '../cardComponents/CardItemConstructor';
import { TypeItem } from '../../helpers/types/types';
import {
  mobileVersionList, sizeMobile, extraSmallLayout,
} from '../../helpers/constants/mobileSize';
import { IPlayer } from '../../helpers/interfaces/storeInterfaces/Player';
import { ITeam } from '../../helpers/interfaces/storeInterfaces/Team';

interface IProps {
  entities: (ITeam | IPlayer)[],
  type: TypeItem,
}

export const ListBase: FC<IProps> = React.memo(({
  entities,
  type,
}) => (
  <ListContainer>
    {entities.map((entity: ITeam | IPlayer) => (
      <CardItemConstructor
        key={entity.id}
        type={type}
        item={entity}
      />
    ))}
  </ListContainer>
));

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  
  @media (max-width: ${mobileVersionList}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  @media (max-width: ${sizeMobile}) {
    grid-template-columns: 180px 180px 180px;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 180px 180px 180px;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }
  
  @media(max-width: 575px) {
    grid-template-columns: 170px 170px 170px;
  }
  
  @media (max-width: 542px) {
    grid-template-columns: 180px 180px;
  }

  @media (max-width: 385px) {
    grid-template-columns: 170px 170px;
  }

  @media (max-width: ${extraSmallLayout}) {
    grid-template-columns: 150px 150px;
  }
`;

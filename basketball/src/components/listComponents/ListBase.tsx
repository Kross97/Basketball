import React, { FC } from 'react';
import styled from 'styled-components';
import { CardItemConstructor } from '../cardComponents/CardItemConstructor';
import { TypeItem } from '../../helpers/types/types';

interface IProps {
  entities: any[],
  type: TypeItem,
}

export const ListBase: FC<IProps> = ({
  entities,
  type,
}) => {
  console.log('___');
  return (
    <ListContainer>
      {entities.map((entity) => (
        <CardItemConstructor
          key={entity.id}
          type={type}
          item={entity}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-column-gap: 24px;
 grid-row-gap: 24px;
`;

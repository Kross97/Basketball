import React, { FC } from 'react';
import styled from 'styled-components';
import { CardItemConstructor } from '../cardComponents/CardItemConstructor';

interface IProps {
  entities: any[],
}

export const ListBase: FC<IProps> = ({
  entities,
}) => {
  console.log('___');
  return (
    <ListContainer>
      {entities.map((entity) => (
        <CardItemConstructor
          key={entity.id}
          type="team"
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
  margin: 32px auto;

`;

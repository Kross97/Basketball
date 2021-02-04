import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmallThin, TextStandart } from '../uiComponents/Typography';
import { IPlayer } from '../helpers/storybookMockConstants/Mock_player';
import { ITeam } from '../helpers/storybookMockConstants/Mock_team';

interface IProps {
  type: 'team' | 'player',
  item: IPlayer | ITeam,
}

export const CardItemConstructor: FC<IProps> = ({ type, item }) => (

  <ContainerCard>
    <BodyCard type={type}>
      <LogoItem type={type} imageUrl={'imageUrl' in item ? item.imageUrl : item.avatarUrl} />
    </BodyCard>
    <FooterCard>
      <DataItem>
        <Name>
          {item.name}
          {'number' in item && <NumberPlayer>{` #${item.number}`}</NumberPlayer>}
        </Name>
        <DescriptionItem>
          {'foundationYear' in item && `Year of foundation: ${item.foundationYear}`}
          {type === 'player' && (item as IPlayer).team}
        </DescriptionItem>
      </DataItem>
    </FooterCard>
  </ContainerCard>
);

const ContainerCard = styled.div`
 cursor: pointer;
`;

const BodyCard = styled.div<{ type: string }>`
  padding: ${({ type, theme: { sizes: { cardSizes } } }) => (cardSizes[type] ? cardSizes[type] : '65px 107px')};
  background: ${({ theme }) => theme.gradient.base};
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const LogoItem = styled.div<{ type: string, imageUrl: string }>`
  width: ${({ type }) => (type === 'team' ? '150px' : '274px')};
  height: ${({ type }) => (type === 'team' ? '150px' : '207px')};

  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat`};
  background-size: contain;
  background-position: center;

`;

const FooterCard = styled.div`
  padding: 21px 15px 24px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
 
`;

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center`;

const Name = styled(TextStandart)`
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.white};
`;

const NumberPlayer = styled(TextStandart)`
 color: ${({ theme }) => theme.colors.lightRed};

`;

const DescriptionItem = styled(TextSmallThin)`
  color: ${({ theme }) => theme.colors.white};

`;

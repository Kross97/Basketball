import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmallThin, TextStandart } from '../uiComponents/Typography';
import { sizeMobile } from '../helpers/constants/mobileSize';
import { Player } from '../helpers/interfaces/Player';
import { Team } from '../helpers/interfaces/Team';
import { TypeItem } from '../helpers/types/types';

interface IProps {
  type: TypeItem,
  item: Player | Team;
}

export const CardItemConstructor: FC<IProps> = ({ type, item }) => (
  <ContainerCard>
    <BodyCard type={type}>
      <LogoItem type={type} imageUrl={'avatarUrl' in item ? item.avatarUrl : item.imageUrl} />
    </BodyCard>
    <FooterCard>
      <DataItem>
        <Name>
          {item.name}
          {'number' in item && <NumberPlayer>{` #${item.number}`}</NumberPlayer>}
        </Name>
        <DescriptionItem>
          {'foundationYear' in item && `Year of foundation: ${item.foundationYear}` }
          {'team' in item && `${item.team}` }
        </DescriptionItem>
      </DataItem>
    </FooterCard>
  </ContainerCard>
);

const ContainerCard = styled.div`
`;

const BodyCard = styled.div<{ type: string }>`
  padding: ${({ type, theme }) => theme.sizes.cardSizes[type]};
  background: ${({ theme }) => theme.gradient.base};
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  
  @media(max-width: ${sizeMobile}) {
    padding: ${({ type, theme }) => theme.sizes.cardSizes[`${type}Mobile`]};
  }
`;

const LogoItem = styled.div<{ type: string, imageUrl: string }>`
  width: ${({ type }) => (type === 'team' ? '150px' : '274px')};
  height: ${({ type }) => (type === 'team' ? '150px' : '207px')};

  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat`};
  background-size: contain;
  
  @media(max-width: ${sizeMobile}) {
    width: ${({ type }) => (type === 'team' ? '58px' : '121px')};
    height: ${({ type }) => (type === 'team' ? '51px' : '93px')};
    background-position-x: 4px;
  }
`;

const FooterCard = styled.div`
  padding: 21px 15px 24px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  
  @media(max-width: ${sizeMobile}) {
    padding: 19px 10px;
  }
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

  @media(max-width: ${sizeMobile}) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

const NumberPlayer = styled(TextStandart)`
 color: ${({ theme }) => theme.colors.lightRed};

 @media (max-width: ${sizeMobile}) {
  font-size: 12px;
}
`;

const DescriptionItem = styled(TextSmallThin)`
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${sizeMobile}) {
    font-size: 10px;
    line-height: 14px;
  }
`;

import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmallThin, TextStandart } from '../uiComponents/Typography';
import { sizeMobile } from '../helpers/constants/mobileSize';
import { Player } from '../helpers/interfaces/Player';
import { Team } from '../helpers/interfaces/Team';

interface IProps {
  item: Player | Team;
}

export const CardItemConstructor: FC<IProps> = ({ item }) => (
  <ContainerCard>
    <BodyCard>
      <LogoItem imageUrl={'avatarUrl' in item ? item.avatarUrl : item.imageUrl} />
    </BodyCard>
    <FooterCard>
      <DataItem>
        <Name>
          {item.name}
          {'number' in item && <NumberPlayer>{item.number}</NumberPlayer>}
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

const BodyCard = styled.div`
  padding: 65px 107px;
  background: ${({ theme }) => theme.gradient.base};
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  
  @media(max-width: ${sizeMobile}) {
    padding: 23px 56px 30px 55px;
  }
`;

const LogoItem = styled.div<{ imageUrl: string }>`
  width: 150px;
  height: 150px;
  display: inline-block;
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat`};
  background-size: contain;
  
  @media(max-width: ${sizeMobile}) {
    width: 59px;
    height: 51px;
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
 color: ${({ theme }) => theme.colors.lightRed}
`;

const DescriptionItem = styled(TextSmallThin)`
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${sizeMobile}) {
    font-size: 10px;
    line-height: 14px;
  }
`;

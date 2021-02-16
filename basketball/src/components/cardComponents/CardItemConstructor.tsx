import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TextSmallThin, TextStandart } from '../../uiComponents/Typography';
import { sizeMobile, extraSmallLayout } from '../../helpers/constants/mobileSize';
import { ITeam } from '../../helpers/interfaces/storeInterfaces/Team';
import { IPlayer } from '../../helpers/interfaces/storeInterfaces/Player';
import { TypeItem } from '../../helpers/types/types';
import imageUnknow from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
import { routePaths } from '../../helpers/constants/routePaths';

interface IProps {
  type: TypeItem,
  item: IPlayer | ITeam;
}

export const CardItemConstructor: FC<IProps> = React.memo(({ type, item }) => {
  const history = useHistory();

  const idTeam = type === 'player' && 'team' in item ? item.team : item.id;

  const teamName = useSelector(({
    teamsDataReducer: { entities },
  }: StoreReducer) => (idTeam ? entities[idTeam]?.name : undefined));

  const showItemCard = () => {
    if (type === 'team') {
      history.push(`${routePaths.teams}/${item.id}`);
    } else {
      history.push(`${routePaths.players}/${item.id}`);
    }
  };

  const typeItemUrl = 'avatarUrl' in item ? item.avatarUrl : item.imageUrl;
  const actualImage = !regExpImageTeam.test(typeItemUrl) ? imageUnknow : typeItemUrl;
  return (
    <ContainerCard onClick={showItemCard}>
      <BodyCard type={type}>
        <LogoItem type={type} imageUrl={actualImage} />
      </BodyCard>
      <FooterCard>
        <DataItem>
          <Name type={type}>
            {(type === 'team' && teamName) || item.name}
            {'number' in item && <NumberPlayer>{` #${item.number}`}</NumberPlayer>}
          </Name>
          <DescriptionItem>
            {'foundationYear' in item && `Year of foundation: ${item.foundationYear}`}
            {(type === 'player' && teamName) && `${teamName}`}
          </DescriptionItem>
        </DataItem>
      </FooterCard>
    </ContainerCard>
  );
});

const ContainerCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const BodyCard = styled.div<{ type: string }>`
  padding: ${({ type, theme: { sizes: { cardSizes } } }) => (cardSizes[type] ? cardSizes[type] : '65px 107px')};
  background: ${({ theme }) => theme.gradient.base};
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  @media (max-width: ${sizeMobile}) {
    display: flex;
    justify-content: center;
    padding: ${({
    type,
    theme: { sizes: { cardSizes } },
  }) => (cardSizes[type] ? cardSizes[`${type}Mobile`] : '24px 0 30px 0')};
  }
`;

const LogoItem = styled.div<{ type: string, imageUrl: string }>`
  width: ${({ type }) => (type === 'team' ? '150px' : '274px')};
  height: ${({ type }) => (type === 'team' ? '150px' : '207px')};

  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat`};
  background-size: contain;
  background-position: center;

  @media (max-width: ${sizeMobile}) {
    width: ${({ type }) => (type === 'team' ? '58px' : '121px')};
    height: ${({ type }) => (type === 'team' ? '51px' : '93px')};
    background-position: ${({ type }) => (type === 'team' ? 'center' : 'bottom')};
  }

  @media (max-width: ${extraSmallLayout}) {
    height: ${({ type }) => (type === 'team' ? '51px' : '79px')};
  }

`;

const FooterCard = styled.div`
  padding: 21px 15px 24px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-grow: 1;
  
  @media (max-width: ${sizeMobile}) {
    padding: 0;
    align-items: center;
    min-height: 94px;
    display: flex;
    justify-content: center;
  }
`;

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center`;

const Name = styled(TextStandart)<{ type: string }>`
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.white};
  align-self: center;
  font-size: 18px;
  line-height: 25px;
  word-break: break-word;
  
  @media (max-width: ${sizeMobile}) {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 6px;
  }
`;

const NumberPlayer = styled(TextStandart)`
  color: ${({ theme }) => theme.colors.lightRed};
  font-size: 18px;
  line-height: 25px;
  
  @media (max-width: ${sizeMobile}) {
    font-size: 15px;
    line-height: 24px;
  }
`;

const DescriptionItem = styled(TextSmallThin)`
  color: ${({ theme }) => theme.colors.grey};
  word-break: break-word;
  
  @media (max-width: ${sizeMobile}) {
    font-size: 13px;
    line-height: 18px;
  }
  @media(max-width: ${extraSmallLayout}) {
    font-size: 12px;
  }
`;

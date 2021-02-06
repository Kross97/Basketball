import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TextSmallThin, TextStandart } from '../../uiComponents/Typography';
import { sizeMobile, extraSmallLayout } from '../../helpers/constants/mobileSize';
import { ITeam } from '../../helpers/interfaces/storeInterfaces/Team';
import { IPlayer } from '../../helpers/interfaces/storeInterfaces/Player';
import { TypeItem } from '../../helpers/types/types';
import imageUknow from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { routePaths } from '../../helpers/constants/routePaths';

interface IProps {
  type: TypeItem,
  item: IPlayer | ITeam;
}

export const CardItemConstructor: FC<IProps> = ({ type, item }) => {
  const history = useHistory();

  const idTeam = type === 'team' ? item.id : (item as IPlayer).team;

  const teamName = useSelector(({
    teamsDataReducer: { entities },
  }: IStoreReducer) => (idTeam ? (entities[idTeam] as ITeam)?.name : undefined));

  const showItemCard = () => {
    if (type === 'team') {
      history.push(`${routePaths.teams}/${item.id}`);
      return;
    }
    history.push(`${routePaths.players}/${item.id}`);
  };

  const typeItemUrl = 'avatarUrl' in item ? item.avatarUrl : item.imageUrl;
  const actualImage = !regExpImageTeam.test(typeItemUrl) ? imageUknow : typeItemUrl;
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
};

const ContainerCard = styled.div`
  cursor: pointer;
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
    background-position: ${({ type }) => (type === 'team' ? 'center' : '0 2px;')};
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

  @media (max-width: ${sizeMobile}) {
    padding: 19px 10px;
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
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};
  text-overflow: ${({ type }) => (type === 'team' && 'ellipsis')};
  overflow: ${({ type }) => (type === 'team' && 'hidden')};
  max-width: ${({ type }) => (type === 'team' && '94%')};
  align-self: center;

  @media (max-width: ${sizeMobile}) {
    font-size: 12px;
    margin-bottom: 6px;
    line-height: 150%;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 99%;

  @media (max-width: ${sizeMobile}) {
    font-size: 10px;
    line-height: 14px;
  }
`;

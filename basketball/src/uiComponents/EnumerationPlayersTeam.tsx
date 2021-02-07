import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall, TextStandart, TextExtraSmall } from './Typography';
import { IPlayer } from '../helpers/interfaces/storeInterfaces/Player';
import { getFullAge } from '../helpers/functions/getFullAge';
import { mobliSizeCard, mobileDataCard } from '../helpers/constants/mobileSize';
import { parsePositionPlayer } from '../helpers/functions/parsePositionPlayer';

interface IProps {
  players: IPlayer[],
}

export const EnumerationPlayersTeam: FC<IProps> = React.memo(({ players }) => (
  <ContainerEnumeration>
    <HeadEnumeration>
      Roster
    </HeadEnumeration>
    <Specifications>
      <NumberPlayer>
        <TextSpecifications>#</TextSpecifications>
        <TextSpecifications>Player</TextSpecifications>
      </NumberPlayer>
      <PersonalData>
        <TextSpecifications>Height</TextSpecifications>
        <TextSpecifications>Weight</TextSpecifications>
        <TextSpecifications>Age</TextSpecifications>
      </PersonalData>
    </Specifications>
    <AllPlayers>
      {players.map((player, index) => (
        <ItemPlayer key={player.id} isLastPlayer={(index + 1) === players.length}>
          <ContainerPlayerImage>
            <NumberText>{player.number}</NumberText>
            <ContainerImage>
              <ImagePlayer imageSrc={player.avatarUrl} />
              <PositionName>
                <NamePlayer>{player.name}</NamePlayer>
                <PositionPlayer>{parsePositionPlayer(player.position)}</PositionPlayer>
              </PositionName>
            </ContainerImage>
          </ContainerPlayerImage>
          <ContainerDataPlayer>
            <TextSpecificationsPlayer>{`${player.height} cm`}</TextSpecificationsPlayer>
            <TextSpecificationsPlayer>{`${player.weight} kg`}</TextSpecificationsPlayer>
            <TextSpecificationsPlayer>{getFullAge(player.birthday)}</TextSpecificationsPlayer>
          </ContainerDataPlayer>
        </ItemPlayer>
      ))}
    </AllPlayers>
  </ContainerEnumeration>
));

const TextSpecifications = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.middleGrey};
  @media(max-width: ${mobileDataCard}) {
    font-size: 15px;
  }
`;

const TextSpecificationsPlayer = styled(TextSpecifications)`
  line-height: 19px;
`;

const NumberText = styled(TextSpecificationsPlayer)`
  align-self: center;
  @media(max-width: ${mobileDataCard}) {
    font-size: 13px;
    line-height: 18px;
  }
`;

const HeadEnumeration = styled(TextStandart)`
  display: inline-block;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.middleGrey};
  padding: 14px 0 14px 32px;

  @media (max-width: ${mobliSizeCard}) {
    padding: 12px 0 12px 16px;
  }
  @media(max-width: ${mobileDataCard}) {
    font-size: 15px;
  }
`;

const Specifications = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  @media (max-width: ${mobliSizeCard}) {
    padding: 8px 16px;
  }
`;

const NumberPlayer = styled.div`
  display: flex;

  & > span:nth-of-type(1) {
    margin-right: 48px;
  }

  @media (max-width: ${mobliSizeCard}) {
    & > span:nth-of-type(1) {
      margin-right: 32px;
    }
  }
`;

const PersonalData = styled.div`
  display: flex;

  & > span:nth-of-type(1), & > span:nth-of-type(2) {
    margin-right: 84px;
  }

  @media (max-width: ${mobliSizeCard}) {
    display: none;
  }
`;

const ContainerEnumeration = styled.div`
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey}`};
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 24px;

  @media (max-width: ${mobliSizeCard}) {
    border-radius: 0;
    border-right: none;
    border-left: none;
  }
`;

const AllPlayers = styled.div``;

const ItemPlayer = styled.div<{ isLastPlayer: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 5px 43px 5px 32px;
  box-sizing: border-box;
  border-bottom: ${({ isLastPlayer, theme }) => (isLastPlayer ? 'none' : `1px solid ${theme.colors.grey}`)};

  @media (max-width: ${mobliSizeCard}) {
    padding: 5px 18px 5px 14px;
  }
`;

const ContainerPlayerImage = styled.div`
  display: flex;

  & > span:nth-of-type(1) {
    margin-right: 35px;
  }

  @media (max-width: ${mobliSizeCard}) {
    & > span:nth-of-type(1) {
      margin-right: 18px;
    }
  }
`;

const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImagePlayer = styled.div<{ imageSrc: string }>`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background: ${({ imageSrc }) => `url(${imageSrc}) no-repeat -5px 1px`};
  background-size: cover;
  margin-right: 10px;
`;

const PositionName = styled.div`
  display: flex;
  flex-direction: column;
`;

const NamePlayer = styled(TextSmall)`
  line-height: 21px;
  color: ${({ theme }) => theme.colors.middleGrey};
  @media(max-width: ${mobileDataCard}) {
    font-size: 15px;
  }
`;

const PositionPlayer = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.grey};
`;

const ContainerDataPlayer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 16px;
  grid-column-gap: 82px;
  align-self: center;

  @media (max-width: ${mobliSizeCard}) {
    display: none;
  }
`;

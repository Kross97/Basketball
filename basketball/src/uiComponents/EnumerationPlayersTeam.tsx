import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall, TextStandart, TextExtraSmall } from './Typography';
import { Player } from '../helpers/storybook_mock_constants/Player';
import { getFullAge } from '../helpers/functions/getFullAge';

interface IProps {
  players: Player[],
}

export const EnumerationPlayersTeam: FC<IProps> = ({ players }) => (
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
                <PositionPlayer>{player.position}</PositionPlayer>
              </PositionName>
            </ContainerImage>
          </ContainerPlayerImage>
          <ContainerDataPlayer>
            <TextSpecifications>{`${player.height} cm`}</TextSpecifications>
            <TextSpecifications>{`${player.weight} kg`}</TextSpecifications>
            <TextSpecifications>{getFullAge(player.birthday)}</TextSpecifications>
          </ContainerDataPlayer>
        </ItemPlayer>
      ))}
    </AllPlayers>
  </ContainerEnumeration>
);

const TextSpecifications = styled(TextSmall)`
 font-weight: 600; 
 color: ${({ theme }) => theme.colors.middleGrey};
`;

const NumberText = styled(TextSpecifications)`
align-self: center;
`;

const HeadEnumeration = styled(TextStandart)`
  display: inline-block;
 font-size: 18px;
  color: ${({ theme }) => theme.colors.middleGrey};
  padding: 14px 0 14px 32px;

  @media(max-width: 650px) {
    padding: 12px 0 12px 16px;
  }
`;

const Specifications = styled.div`
 display: flex;
 justify-content: space-between;
  padding: 10px 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  @media(max-width: 650px) {
    padding: 8px 16px;
  }
`;

const NumberPlayer = styled.div`
  gap: 48px;
  display: flex;

  @media(max-width: 650px) {
    gap: 32px;
  }
`;

const PersonalData = styled.div`
  gap: 84px;
  display: flex;
  
  @media(max-width: 650px) {
    display: none;
  }
`;

const ContainerEnumeration = styled.div`
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey}`};

  @media(max-width: 650px) {
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

  @media(max-width: 650px) {
    padding: 5px 18px 5px 14px;
  }
`;

const ContainerPlayerImage = styled.div`
 display: flex;
 gap: 34px;
  @media(max-width: 650px) {
    gap: 18px;
  }
`;

const ContainerImage = styled.div`
 display: flex;
  align-items: center;
 justify-content: space-between;
 gap: 10px; 
`;

const ImagePlayer = styled.div<{ imageSrc: string}>`
 width: 40px;
 height: 40px;
 border-radius: 25px;
 background: ${({ imageSrc }) => `url(${imageSrc}) no-repeat -5px 1px`};
 background-size: cover; 
`;

const PositionName = styled.div`
 display: flex;
  flex-direction: column;
`;

const NamePlayer = styled(TextSmall)`
 font-weight: 600; 
 color: ${({ theme }) => theme.colors.middleGrey};
`;

const PositionPlayer = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.grey};
`;

const ContainerDataPlayer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 16px;
  gap: 82px;
  align-self: center;

  @media(max-width: 650px) {
    display: none;
  }
`;

import React from 'react';
import styled from 'styled-components';
import createIcon from '../static/icons/create.svg';
import { ReactComponent as DeleteIcon } from '../static/icons/delete.svg';
import { TextLink } from '../../uiComponents/TextLink';
import { Player } from '../../helpers/Mock_player';
import { TextExtraLarge } from '../../uiComponents/Typography';
import { sizeMobile } from '../../helpers/constants/mobileSize';
import { PlayerItemsDescription } from './cardAdditionalComponents/PlayerItemsDescriptions';

export const PlayerCard = () => (
  <div>
    <CardNavigation>
      <div>
        <TextLink text="Main" to="Main" disabled={false} />
        <Separator>/</Separator>
        <TextLink text="Teams" to="Players" disabled={false} />
        <Separator>/</Separator>
        <TextLink text={`${Player.name}`} to={`${Player.name}`} disabled />
      </div>
      <Actions>
        <BtnCreate type="button" />
        <BtnDelete type="button">
          <RemoveIcon />
        </BtnDelete>
      </Actions>
    </CardNavigation>
    <CardBody>
      <Content>
        <ImagePlayer />
        <DataCard>
          <PlayerName>
            {Player.name}
            <PlayerNumber>{`#${Player.number}`}</PlayerNumber>
          </PlayerName>
          <DescriptionContainer>
            <PlayerItemsDescription
              player={Player}
            />
          </DescriptionContainer>
        </DataCard>
      </Content>
    </CardBody>
  </div>
);

const CardNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 26px 35px 21px;
  border-radius: 10px 10px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.grey};

  @media (max-width: 445px) {
    padding: 15px 16px;
    border-radius: 0;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  padding: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
`;

const BtnCreate = styled(Button)`
  background: url(${createIcon}) no-repeat 4px 3px;
  background-size: 17px;
  margin-right: 22px;
`;

const RemoveIcon = styled(DeleteIcon)`
  width: 14px;
  height: 18px;
`;

const BtnDelete = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};

  & svg {
    fill: ${({ theme }) => theme.colors.red};
  }
`;

const Actions = styled.div`
  display: flex;
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 4px;
`;

const CardBody = styled.div`
  padding: 65px 0 0 50px;
  background: ${({ theme }) => theme.gradient.base};
  border-radius: 0 0 10px 10px;

  @media (max-width: ${sizeMobile}) {
    padding: 48px 15px 43px;
    background: ${({ theme }) => theme.gradient.mobile};
    border-radius: 0;
  }
`;

const DataCard = styled.div`
  align-self: self-start;
  margin-bottom: 65px;

  @media (max-width: ${sizeMobile}) {
    text-align: center;
    align-self: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${sizeMobile}) {
    flex-direction: column;
  }
`;

const ImagePlayer = styled.div`
  margin-right: 56px;
  flex-shrink: 0.1;
  background: url(${Player.avatarUrl}) no-repeat;
  width: 500px;
  height: 368px;
  background-size: contain;
  align-self: flex-end;

  @media (max-width: ${sizeMobile}) {
    width: 185px;
    height: 144px;
    margin-right: 0;
    margin-bottom: 48px;
    align-self: center;
  }
`;

const PlayerName = styled(TextExtraLarge)`
  display: block;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  @media (max-width: ${sizeMobile}) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 32px;
  }
`;

const PlayerNumber = styled(PlayerName)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.lightRed};
  margin-bottom: 0;
  margin-left: 10px;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 54px 180px;

  @media (max-width: ${sizeMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 43px;
  }
`;

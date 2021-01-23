import React, { FC } from 'react';
import styled from 'styled-components';
import createIcon from '../static/icons/create.svg';
import { ReactComponent as DeleteIcon } from '../static/icons/delete.svg';
import { TextLink } from '../uiComponents/TextLink';
import { Player } from '../helpers/MOCK_Player'; // мок пока не готов сервер
import { TextExtraLarge, TextLarge, TextStandart } from '../uiComponents/Typography';
import { getFullAge } from '../helpers/functions/getFullAge';
import { sizeMobile } from '../helpers/constants/mobileSize';

interface IProps {
  id: number;
}

export const PlayerCard: FC<IProps> = ({ id }) => {
  console.log('ID', id); // id для запроса в редакс , когда сервер заработает
  return (
    <ContainerCard>
      <CardNavigation>
        <Links>
          <TextLink text="Main" href="#" disabled={false} />
          <Separator>/</Separator>
          <TextLink text="Teams" href="#" disabled={false} />
          <Separator>/</Separator>
          <TextLink text={`${Player.name}`} href="#" disabled />
        </Links>
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
              <ItemDescription>
                <LabelItem>Position</LabelItem>
                <DataItem>{Player.position}</DataItem>
              </ItemDescription>
              <ItemDescription>
                <LabelItem>Team</LabelItem>
                <DataItem>{Player.team}</DataItem>
              </ItemDescription>
              <ItemDescription>
                <LabelItem>Height</LabelItem>
                <DataItem>{`${Player.height} cm`}</DataItem>
              </ItemDescription>
              <ItemDescription>
                <LabelItem>Weight</LabelItem>
                <DataItem>{`${Player.weight} kg`}</DataItem>
              </ItemDescription>
              <ItemDescription>
                <LabelItem>Age</LabelItem>
                <DataItem>{`${getFullAge(Player.birthday)}`}</DataItem>
              </ItemDescription>
            </DescriptionContainer>
          </DataCard>
        </Content>
      </CardBody>
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
`;

const CardNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 26px 35px 21px;
  border-radius: 10px 10px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  
  @media(max-width: 445px) {
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

const Links = styled.div``;

const CardBody = styled.div`
  padding: 65px 0 0 0;
  background: ${({ theme }) => theme.gradient.base};
  border-radius: 0 0 10px 10px;
  
  @media(max-width: ${sizeMobile}) {
    padding: 48px 15px 43px;
    background: ${({ theme }) => theme.gradient.mobile};
    border-radius: 0;
  }
`;

const DataCard = styled.div`
  align-self: self-start;
  @media(max-width: ${sizeMobile}) {
    text-align: center;
    align-self: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  @media(max-width: ${sizeMobile}) {
    flex-direction: column;
  }
`;

const ImagePlayer = styled.div`
  margin-right: 56px;
  flex-shrink: 0.1;
  background: url(${Player.avatarUrl}) no-repeat;
  width: 531px;
  height: 459px;
  background-size: contain;
  
  @media(max-width: ${sizeMobile}) {
    width: 185px;
    height: 144px;
    margin-right: 0;
    margin-bottom: 48px;
  }
`;

const PlayerName = styled(TextExtraLarge)`
  display: block;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  
  @media(max-width: ${sizeMobile}) {
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

const ItemDescription = styled.div``;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 54px 180px;
  
  @media(max-width: ${sizeMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 43px;
  }
`;

const LabelItem = styled(TextLarge)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
  font-weight: 700;
  
  @media(max-width: ${sizeMobile}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const DataItem = styled(TextStandart)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${sizeMobile}) {
    font-size: 14px;
  }
`;

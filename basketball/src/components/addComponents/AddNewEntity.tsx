import React, { FC } from 'react';
import styled from 'styled-components';
import { TextLink } from '../../uiComponents/TextLink';
import { routePaths } from '../../helpers/constants/routePaths';
import { ImageUpload } from '../../uiComponents/ImageUpload';
import { FormAddPlayer } from './FormAddPlayer';
import { FormAddTeam } from './FormAddTeam';

interface IProps {
  isTeam: boolean;
  addNewEntity: (data: any) => void;
  loadImage: (image: any) => void;
}

export const AddNewEntity: FC<IProps> = ({
  isTeam,
  addNewEntity,
  loadImage,
}) => (
  <ContainerAdd>
    <HeaderAdd>
      <TextLink text="Main" to={routePaths.mainBase} disabled={false} />
      <Separator>/</Separator>
      <TextLink text={isTeam ? 'Teams' : 'Players'} to={`${routePaths.mainBase}/${isTeam ? 'teams' : 'players'}`} disabled={false} />
      <Separator>/</Separator>
      <TextLink text={isTeam ? 'Add new team' : 'Add new player'} to="#" disabled />
    </HeaderAdd>
    <BodyAdd>
      <ImageUpload loadImage={loadImage} />
      {isTeam
        ? <FormAddTeam addNewTeam={addNewEntity} />
        : <FormAddPlayer addNewPlayer={addNewEntity} />}
    </BodyAdd>
  </ContainerAdd>
);

const ContainerAdd = styled.div`
  flex-grow: 0.5;
  margin: 32px auto auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderAdd = styled.div`
  padding: 26px 0 19px 32px;
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 4px;
`;

const BodyAdd = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 48px 0 48px 73px;
  
  & > label:nth-child(1) {
    margin-right: 136px;
  }
`;

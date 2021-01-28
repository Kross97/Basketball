import React, { FC, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { TextLink } from '../../uiComponents/TextLink';
import { routePaths } from '../../helpers/constants/routePaths';
import { ImageUpload } from '../../uiComponents/ImageUpload';
import { FormAddPlayer } from './FormAddPlayer';
import { FormAddTeam } from './FormAddTeam';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { NotificationError } from '../../uiComponents/NotificationError';
import { imageLoadData } from '../../store/reducers/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';

interface IProps {
  isTeam: boolean;
  addNewEntity: (data: any) => void;
  loadImage: (image: any) => void;
}

const actionCreators = {
  clearImgSrc: imageLoadData.actions.clearSrcImage,
};

export const AddNewEntity: FC<IProps> = ({
  isTeam,
  addNewEntity,
  loadImage,
}) => {
  const { clearImgSrc } = useCustomActions(actionCreators);

  useEffect(() => {
    clearImgSrc();
  }, []);

  const { srcImage, errorMessage } = useSelector((state: IStoreReducer) => (
    {
      srcImage: state.imageLoadData.srcImage,
      errorMessage: state.addEntityError.errorMessage,
    }));

  return (
    <ContainerAdd>
      <HeaderAdd>
        <TextLink text="Main" to={routePaths.mainBase} disabled={false} />
        <Separator>/</Separator>
        <TextLink
          text={isTeam ? 'Teams' : 'Players'}
          to={`${routePaths.mainBase}/${isTeam ? 'teams' : 'players'}`}
          disabled={false}
        />
        <Separator>/</Separator>
        <TextLink text={isTeam ? 'Add new team' : 'Add new player'} to="#" disabled />
      </HeaderAdd>
      <BodyAdd>
        <ImageUpload imageSrc={srcImage} loadImage={loadImage} />
        {isTeam
          ? <FormAddTeam addNewTeam={addNewEntity} />
          : <FormAddPlayer addNewPlayer={addNewEntity} />}
      </BodyAdd>
      {errorMessage !== '' && <Notification><NotificationError text={errorMessage} /></Notification>}
    </ContainerAdd>
  );
};
const ContainerAdd = styled.div`
  flex-grow: 0.5;
  margin: 32px auto auto;
  border-radius: 10px;
  position: relative;
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

const animationNotification = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  
  10% {
    opacity: 0.1;
    transform: scale(0.9);
  }
  
  25% {
    opacity: 0.3;
    transform: scale(1);
  }
  
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
  
  75% {
    opacity: 0.8;
    transform: scale(1.2);
  }
  
  100% {
    opacity: 1;
    transform: scale(1.3);
  }
`;

const Notification = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: -80px;
  right: 10%;
  left: 10%;
  animation: ${animationNotification} 1.5s linear;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
`;

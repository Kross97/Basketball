import React, { FC, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextLink } from '../../uiComponents/TextLink';
import { routePaths } from '../../helpers/constants/routePaths';
import { ImageUpload } from '../../uiComponents/ImageUpload';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { NotificationError } from '../../uiComponents/NotificationError';
import { addEntityError } from '../../store/reducers/addingError';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';

interface IProps {
  isTeam: boolean;
  imageEntity?: string | undefined;
}

const actionCreators = {
  clearErrorMessage: addEntityError.actions.clearErrorMessage,
};

export const AddNewEntity: FC<IProps> = ({
  isTeam,
  imageEntity,
  children,
}) => {
  const { clearErrorMessage } = useCustomActions(actionCreators);
  const { t } = useTranslation();
  useEffect(() => {
    clearErrorMessage();
  }, []);

  const { errorMessage } = useSelector((state: IStoreReducer) => (
    {
      errorMessage: state.addEntityError.errorMessage,
    }));

  return (
    <ContainerAdd>
      <HeaderAdd>
        <TextLink text={t('main')} to={routePaths.mainBase} disabled={false} />
        <Separator>/</Separator>
        <TextLink
          text={isTeam ? t('team:teams') : t('player:players')}
          to={isTeam ? routePaths.teams : routePaths.players}
          disabled={false}
        />
        <Separator>/</Separator>
        <TextLink text={isTeam ? t('team:addTeam') : t('player:addPlayer')} to="#" disabled />
      </HeaderAdd>
      <BodyAdd>
        <ImageUpload defaultImage={imageEntity} />
        {children}
        {errorMessage !== '' && <Notification><NotificationError text={errorMessage} /></Notification>}
      </BodyAdd>
    </ContainerAdd>
  );
};
const ContainerAdd = styled.div`
  flex-grow: 0.5;
  margin: 32px auto auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${mobileVersionLayout}) {
    border-radius: 0;
    flex-grow: 1;
    margin: 16px auto auto;
  }
`;

const HeaderAdd = styled.div`
  padding: 26px 0 19px 32px;

  @media (max-width: ${mobileVersionLayout}) {
    padding: 15px 0 15px 16px;
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 4px;
`;

const BodyAdd = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 48px 0 48px 73px;
  position: relative;

  & > label:nth-child(1) {
    margin-right: 136px;
    align-self: flex-start;
  }

  @media (max-width: ${mobileVersionLayout}) {
    flex-direction: column;
    align-items: center;
    padding: 63px 0 48px 0;

    & > label:nth-child(1) {
      margin-right: 0;
      margin-bottom: 48px;
    }

    & input {
      padding: 4px 12px;
    }

    & button {
      padding: 4px 58px;
    }
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
  width: 50%;
  bottom: -20px;
  left: 28%;
  animation: ${animationNotification} 1.5s linear;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;

  @media (max-width: ${mobileVersionLayout}) {
    bottom: unset;
    top: 20px;
    left: 24%;
  }
`;

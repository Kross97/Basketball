import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextLink } from '../../uiComponents/TextLink';
import { routePaths } from '../../helpers/constants/routePaths';
import { ImageUpload } from '../../uiComponents/ImageUpload';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
import { NotificationMessage } from '../../uiComponents/NotificationMessage';
import { addEntityError } from '../../store/reducers/addingError';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileSizeGridForm, mobliSizeCard } from '../../helpers/constants/mobileSize';

interface IProps {
  isTeam: boolean;
  imageEntity?: string | undefined;
}

const actionCreators = {
  clearErrorMessage: addEntityError.actions.clearErrorMessage,
};

export const AddNewEntity: FC<IProps> = React.memo(({
  isTeam,
  imageEntity,
  children,
}) => {
  const { clearErrorMessage } = useCustomActions(actionCreators);
  const { t } = useTranslation();
  useEffect(() => {
    clearErrorMessage();
  }, []);

  const { errorMessage } = useSelector((state: StoreReducer) => (
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
        {errorMessage !== '' && <Notification><NotificationMessage text={errorMessage} /></Notification>}
      </BodyAdd>
    </ContainerAdd>
  );
});

const ContainerAdd = styled.div`
  flex-grow: 0.5;
  margin: 32px auto auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${mobliSizeCard}) {
    border-radius: 0;
    flex-grow: 1;
    margin: 16px auto auto;
  }
`;

const HeaderAdd = styled.div`
  padding: 26px 0 19px 32px;

  @media (max-width: ${mobliSizeCard}) {
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

  @media (max-width: ${mobileSizeGridForm}) {
    flex-direction: column;
    padding: 48px 73px;

    & > label:nth-child(1) {
      margin-right: 0;
      align-self: center;
      margin-bottom: 40px;
    }
  }

  @media (max-width: ${mobliSizeCard}) {
    flex-direction: column;
    align-items: stretch;
    padding: 48px 24px;

    & > label:nth-child(1) {
      margin-right: 0;
      margin-bottom: 48px;
      align-self: center;
    }

    & input {
      padding: 4px 12px;
    }
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 80px;
  right: 36px;
  width: 470px;
  display: flex;
  justify-content: center;

  @media (max-width: ${mobliSizeCard}) {
    width: auto;
    top: 60px;
    right: 20%;
    left: 20%;
  }
`;

import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import profileLogo from '../static/icons/profile.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { regExpImageTeam } from '../helpers/constants/regularExp';

interface IProps {
  name: string;
  avatarUrl: string | null;
  onClick: () => void;
}

export const AuthorizedUserLogo: FC<IProps> = React.memo(({ name, avatarUrl, onClick }) => (
  <ContainerLogo onClick={onClick}>
    <NameUser>{name}</NameUser>
    <UserLogo avatarUrl={regExpImageTeam.test(`${avatarUrl}`) ? avatarUrl : profileLogo} />
  </ContainerLogo>
));

const ContainerLogo = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${mobileVersionLayout}) {
    flex-direction: row-reverse;
  }
`;

const UserLogo = styled.div<{ avatarUrl: string | null }>`
  margin-left: 19px;
  width: 30px;
  height: 30px;
  background: ${({ avatarUrl }) => (avatarUrl ? `url(${avatarUrl}) no-repeat` : `url(${profileLogo}) no-repeat`)};
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  @media (max-width: ${mobileVersionLayout}) {
    min-width: 40px;
    min-height: 40px;
    margin-left: 0;
    margin-right: 12px;
  }
`;

const NameUser = styled(TextSmall)`
  word-break: break-word;
 @media(max-width: ${mobileVersionLayout}) {
   font-size: 15px;
 }
`;

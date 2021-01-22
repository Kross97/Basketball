import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import { ReactComponent as ProfileLogo } from '../static/icons/profile.svg';

interface IProps {
  name: string;
}

export const AuthorizedUserLogo: FC<IProps> = ({ name }) => (
  <ContainerLogo>
    <LogoText>{name}</LogoText>
    <UserLogo />
  </ContainerLogo>
);

const LogoText = styled(TextSmall)`
 font-weight: 600;
`;

const ContainerLogo = styled.div`
  display: inline-flex;
  align-items: center;
`;

const UserLogo = styled(ProfileLogo)`
  margin-left: 19px;
  width: 30px;
  height: 30px;
`;

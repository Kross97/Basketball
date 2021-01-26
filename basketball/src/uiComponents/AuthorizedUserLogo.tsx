import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import { ReactComponent as ProfileLogo } from '../static/icons/profile.svg';
import { sizeMobile } from '../helpers/constants/mobileSize';

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
  
  @media(max-width: ${sizeMobile}) {
    flex-direction: row-reverse;
  }
`;

const UserLogo = styled(ProfileLogo)`
  margin-left: 19px;
  width: 30px;
  height: 30px;

  @media(max-width: ${sizeMobile}) {
    width: 40px;
    height: 40px;
    margin-left: 0;
    margin-right: 12px;
  }
`;

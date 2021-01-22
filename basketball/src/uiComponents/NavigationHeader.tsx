import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from './BrandLogo';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';

export const NavigationHeader = () => (
  <ContainerNavigation>
    <BrandLogo />
    <AuthorizedUserLogo name="Test test" />
  </ContainerNavigation>
);

const ContainerNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 53px;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
`;

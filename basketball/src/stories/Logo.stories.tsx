import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { BrandLogo } from '../uiComponents/BrandLogo';

export default {
  title: 'UI/Logo',
  component: BrandLogo,
} as Meta;

export const LogoBasketball = () => <BrandLogo />;

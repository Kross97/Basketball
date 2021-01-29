import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ImageUpload } from '../uiComponents/ImageUpload';

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
} as Meta;

export const ImageDownload = () => <ImageUpload />;

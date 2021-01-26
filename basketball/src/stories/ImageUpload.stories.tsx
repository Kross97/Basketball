import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ImageUpload } from '../uiComponents/ImageUpload';
import mockUploadImage from '../static/mock_image_upload.svg';

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
} as Meta;

interface Iprops {
  imageSrc: string;
}

export const ImageDownload = ({ imageSrc }: Iprops) => <ImageUpload imageSrc={imageSrc} />;

ImageDownload.argTypes = {
  imageSrc: {
    control: {
      type: 'select',
      options: ['start', `${mockUploadImage}`],
    },
  },
};

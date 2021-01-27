import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ImageUpload } from '../uiComponents/ImageUpload';
import mockUploadImage from '../static/storybook_mock_images/mock_image_upload.svg';

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
} as Meta;

interface Iprops {
  imageSrc: string;
}

export const ImageDownload = ({ imageSrc }: Iprops) => <ImageUpload loadImage={(data: any) => { console.log('STORIES_DATA_IMAGE', data); }} imageSrc={imageSrc} />;

ImageDownload.argTypes = {
  imageSrc: {
    control: {
      type: 'select',
      options: ['start', `${mockUploadImage}`],
    },
  },
};

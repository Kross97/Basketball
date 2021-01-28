import React, { FC } from 'react';
import styled from 'styled-components';
import addPhotoIcon from '../static/icons/add_photo.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

interface Iprops {
  imageSrc?: string;
  defaultImage?: string | undefined;
  loadImage: (image: any) => void;
}

export const ImageUpload: FC<Iprops> = ({
  imageSrc = '',
  loadImage,
  defaultImage,
}) => (
  <label>
    <InputLoad onChange={loadImage} type="file" />
    <ImageContainer defaultImage={defaultImage} imageSrc={imageSrc}>
      <AddHover imageSrc={imageSrc} />
    </ImageContainer>
  </label>
);

const InputLoad = styled.input`
  display: none;
`;

const AddHover = styled.div<{ imageSrc: string; }>`
  border-radius: 10px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(156, 156, 156, 0.5) url(${addPhotoIcon}) no-repeat center center;
  background-size: 74px 75px;
  transition: 1s ease;
  
  &:hover {
    background-color: rgba(48, 48, 48, 0.8);
  }
  @media (max-width: ${mobileVersionLayout}) {
    background-size: 41px 40px;
  }
`;

const ImageContainer = styled.div<{defaultImage: string | undefined; imageSrc: string; }>`
  border-radius: 10px;
  cursor: pointer;
  width: 336px;
  height: 261px;
  position: relative;
  background: ${({
    imageSrc,
    defaultImage,
    theme,
  }) => (imageSrc === '' ? `${theme.colors.grey} url(${defaultImage}) no-repeat center center` : `${theme.colors.white} url(${imageSrc}) no-repeat center 7px`)};
  background-size: contain;
  
  @media (max-width: ${mobileVersionLayout}) {
    width: 185px;
    height: 144px;
  }
`;

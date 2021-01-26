import React from 'react';
import styled from 'styled-components';
import addPhotoIcon from '../static/icons/add_photo.svg';

export const ImageUpload = ({ imageSrc = 'start' }) => (
  <ImageContainer imageSrc={imageSrc}>
    <AddHover imageSrc={imageSrc} />
  </ImageContainer>
);

const AddHover = styled.div<{ imageSrc: string; }>`
  border-radius: 10px;
  display: ${({ imageSrc }) => (imageSrc === 'start' ? 'none' : 'block')};
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
  @media (max-width: 445px) {
    background-size: 41px 40px;
  }
`;

const ImageContainer = styled.div<{ imageSrc: string; }>`
  border-radius: 10px;
  cursor: pointer;
  width: 336px;
  height: 261px;
  position: relative;
  background: ${({
    imageSrc,
    theme,
  }) => (imageSrc === 'start' ? `${theme.colors.grey} url(${addPhotoIcon}) no-repeat center center` : `${theme.colors.white} url(${imageSrc}) no-repeat center 7px`)};
  background-size: ${({ imageSrc }) => (imageSrc === 'start' ? '74px 75px' : 'contain')};
  
  @media (max-width: 445px) {
    background-size: ${({ imageSrc }) => (imageSrc === 'start' ? '41px 40px' : 'contain')};
    width: 185px;
    height: 144px;
  }
`;

import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import addPhotoIcon from '../static/icons/add_photo.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { imageLoadData } from '../store/reducers/image';
import { loadNewImage } from '../store/asyncActions/image';
import { IStoreReducer } from '../helpers/interfaces/StoreReducer';

interface IProps {
  defaultImage?: string | undefined;
}

const actionCreators = {
  loadNewImage,
  clearSrcImage: imageLoadData.actions.clearSrcImage,
  addSrcImageExisting: imageLoadData.actions.addSrcImageExisting,
};

export const ImageUpload: FC<IProps> = React.memo(({
  defaultImage,
}) => {
  const { token, srcImage } = useSelector((state: IStoreReducer) => ({
    token: state.authDataUser.authData.token,
    srcImage: state.imageLoadData.srcImage,
  }));

  const {
    clearSrcImage,
    loadNewImage: downloadImage,
    addSrcImageExisting,
  } = useCustomActions(actionCreators);

  useEffect(() => {
    clearSrcImage();
    if (defaultImage) {
      addSrcImageExisting({ srcImage: defaultImage });
    }
  }, [defaultImage]);

  const loadImage = (imageData: React.ChangeEvent<HTMLInputElement>) => {
    if (imageData.target.files) {
      const fileImage = imageData.target.files[0];
      const formData = new FormData();
      formData.set('file', fileImage);
      downloadImage({ file: formData, token });
    }
  };

  return (
    <label>
      <InputLoad onChange={loadImage} type="file" accept="image/png, image/jpeg, image/jpg" />
      <ImageContainer imageSrc={srcImage}>
        <AddHover />
      </ImageContainer>
    </label>
  );
});

const InputLoad = styled.input`
  display: none;
`;

const AddHover = styled.div`
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

const ImageContainer = styled.div<{ imageSrc: string; }>`
  border-radius: 10px;
  cursor: pointer;
  width: 336px;
  height: 261px;
  position: relative;
  background: ${({ imageSrc }) => `url(${imageSrc}) no-repeat center 6px`};
  background-size: contain;

  @media (max-width: ${mobileVersionLayout}) {
    width: 185px;
    height: 144px;
  }
`;

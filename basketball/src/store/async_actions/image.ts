import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveImage, deleteImage } from '../../api/image';
import { IImageData, IDataDeleted } from '../../helpers/interfaces/request_interfaces/Image';
import { imageLoadData } from '../reducers/image';
import { imageRequestErrors } from '../../api/api_constants/imageRequestError';
import { addEntityError } from '../reducers/addingError';

export const loadNewImage = createAsyncThunk('imageLoad',
  async (imageData: IImageData, { dispatch }) => {
    dispatch(addEntityError.actions.addErrorMessage({ errorMessage: '' }));
    try {
      const result = await saveImage('Image/SaveImage', imageData.file, imageData.token);
      dispatch(imageLoadData.actions.addSrcImageServer({ srcImage: result }));
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: imageRequestErrors[error.status],
        }));
      }
    }
  });

export const deleteImageEntity = createAsyncThunk(
  'deleteImage',
  ({ srcImage, token }: IDataDeleted) => {
    deleteImage(`Image/DeleteImage?fileName=${srcImage}`, token);
  },
);

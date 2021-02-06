import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IImageState } from '../../helpers/interfaces/storeInterfaces/Image';

export const imageLoadData = createSlice({
  name: 'imageLoad',
  initialState: {
    srcImage: '',
  },
  reducers: {
    addSrcImageServer: (state: IImageState, {
      payload: { srcImage },
    }: PayloadAction<{ srcImage: string }>) => ({ srcImage: `${process.env.REACT_APP_URL}${srcImage}` }),
    addSrcImageExisting: (state: IImageState,
      { payload: { srcImage } }: PayloadAction<{ srcImage: string }>) => ({ srcImage }),
    clearSrcImage: () => ({ srcImage: '' }),
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IImageState } from '../../helpers/interfaces/store_interfaces/Image';

export const imageLoadData = createSlice({
  name: 'imageLoad',
  initialState: {
    srcImage: '',
  },
  reducers: {
    addSrcImage: (state: IImageState, {
      payload: { srcImage },
    }: PayloadAction<{ srcImage: string }>) => ({ srcImage: `${process.env.REACT_APP_URL}${srcImage}` }),
    clearSrcImage: () => ({ srcImage: '' }),
  },
});
